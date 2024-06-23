import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

type Props = {
    data: {
        "@type": "NutritionInformation",
        servingSize: string
        calories: string
        carbohydrateContent: string
        proteinContent: string
        fatContent: string
        saturatedFatContent: string
        fiberContent: string
        sugarContent: string
    }
}

const NutritionInfo = ({ data }: Props) => {
  return (
    <Table>
      <TableHeader>Nutrition</TableHeader>
      <TableBody>
      <TableRow>
          <TableCell className="font-medium">Serving: </TableCell>
          <TableCell>{data?.servingSize}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Calories:</TableCell>
          <TableCell>{data?.calories}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Carb:</TableCell>
          <TableCell>{data?.carbohydrateContent}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Protein: </TableCell>
          <TableCell>{data?.proteinContent}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Tans Fat: </TableCell>
          <TableCell>{data?.fatContent}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Saturated Fat: </TableCell>
          <TableCell>{data?.saturatedFatContent}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Fiber: </TableCell>
          <TableCell>{data?.fiberContent}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Sugar: </TableCell>
          <TableCell>{data?.sugarContent}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default NutritionInfo