type TransactionDetailsProps = {
  params: {
    slug: string
  }
}

export default function TransactionDetails({
  params,
}: TransactionDetailsProps) {
  return <div>{params?.slug}</div>
}
