import { NextApiRequest, NextApiResponse } from "next"
import { websiteData } from "../../../utils/websiteData"

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(websiteData)) {
      throw new Error("Cannot find website data")
    }

    res.status(200).json(websiteData)
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
