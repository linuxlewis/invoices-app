"use client";

import { Box, List, ListItemText, ListItem, Typography, CircularProgress } from '@mui/material'
import { useQuery, QueryClient, QueryClientProvider } from 'react-query'

import { io } from 'socket.io-client';
import { useCallback, useEffect } from 'react';

const socket = io('ws://localhost:3001')

const queryClient = new QueryClient()

type Invoice = {
  id: string;
  invoiceNumber: string;
  totalAmount: number;
  status: string;
}


const InvoicesList = () => {

  const invoicesQuery = useQuery('invoices', async (): Promise<Array<Invoice>> => {
    return (await fetch('/api/invoices')).json()
  })

  const onInvoiceMessage = useCallback((updatedInvoice: Invoice) => {
      console.log(updatedInvoice);
      const invoiceIndex = invoicesQuery.data?.findIndex((inv) => inv.id ===  updatedInvoice?.id)

      if (invoiceIndex !== undefined && invoiceIndex > -1 && invoicesQuery.data) {
        const newQueryData = [...invoicesQuery.data];
        newQueryData[invoiceIndex] = updatedInvoice;
        queryClient.setQueryData('invoices', newQueryData)
      }
  }, [invoicesQuery])

  useEffect(() => {
    socket.on('invoice', onInvoiceMessage)

    return () => {
      socket.off('invoice', onInvoiceMessage)
    }
  }, [onInvoiceMessage])

  return (<Box>

    <Typography variant='h3'>Invoices</Typography>

    {invoicesQuery.isLoading && (<CircularProgress />)}

    <List>
      <ListItem>
        <ListItemText>Invoice Number</ListItemText>
        <ListItemText>Status</ListItemText>
        <ListItemText>Total Amount</ListItemText>
      </ListItem>
      {invoicesQuery.data?.map((inv) => {
        return (<ListItem key={inv.invoiceNumber}>
          
          
          <ListItemText>{inv.invoiceNumber}</ListItemText>
          <ListItemText>{inv.status}</ListItemText>
          <ListItemText>{inv.totalAmount}</ListItemText>
          
          
          </ListItem>)
      })}
      
    </List>
    
    </Box>)
}

export default function InvoicesPage() {

  return (
    <QueryClientProvider client={queryClient}>
    <main className="flex min-h-screen flex-col justify-between p-48">
      <InvoicesList />
    </main>
    </QueryClientProvider>
  )

}
