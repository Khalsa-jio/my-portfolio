import { NextApiRequest, NextApiResponse } from "next"

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(_req.body)
}

export default handler
