import { NextApiResponse, NextApiRequest } from "next";
import { invoices } from '../../../app/invoices';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  return res.status(200).json(invoices);
}