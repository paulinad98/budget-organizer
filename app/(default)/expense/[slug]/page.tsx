type ExpenseDetailsProps = {
  params: {
    slug: string
  }
}

export default function ExpenseDetails({
  params,
}: ExpenseDetailsProps) {
  return <div>{params?.slug}</div>
}
