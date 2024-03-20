import { Typography } from '@/components/ui/Typography/Typography'

export function ExpensesSummary() {
  return (
    <>
      <Typography className=" font-normal text-text" variant="large">
        $12,400.00
      </Typography>
      <Typography className="mt-1  text-secondary " variant="small">
        My month expenses
      </Typography>
    </>
  )
}
