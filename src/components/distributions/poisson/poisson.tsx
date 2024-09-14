"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { factorial } from "@/components/functions/factorial";

export default function PoissonDistribution() {
  const [numTrials, setNumTrials] = useState("");
  const [lambda, setLambda] = useState("");
  const [tableData, setTableData] = useState<number[][]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  const generateTable = (e: React.FormEvent) => {
    e.preventDefault();
    const trials = parseInt(numTrials);
    const lambdaValue = parseFloat(lambda);

    if (
      isNaN(trials) ||
      isNaN(lambdaValue) ||
      trials <= 0 ||
      lambdaValue <= 0
    ) {
      setErrorMessage(
        "Please enter valid numbers. Number of trials should be a positive integer, and lambda should be a positive number."
      );
      return;
    }

    setErrorMessage("");

    const newTableData = [];
    const row = [];
    for (let j = 0; j <= trials; j++) {
      const totalProb =
        (Math.exp(-lambdaValue) * Math.pow(lambdaValue, j)) / factorial(j);
      row.push(totalProb);
    }
    newTableData.push(row);

    setTableData(newTableData);
  };

  return (
    <div className="flex-grow">
      <form onSubmit={generateTable} className="space-y-4">
        <div>
          <Label htmlFor="numTrials">Number of Trials</Label>
          <Input
            id="numTrials"
            type="number"
            value={numTrials}
            onChange={(e) => setNumTrials(e.target.value)}
            placeholder="Enter number of trials"
            required
          />
        </div>
        <div>
          <Label htmlFor="lambda">Lambda (average rate)</Label>
          <Input
            id="lambda"
            type="number"
            value={lambda}
            onChange={(e) => setLambda(e.target.value)}
            placeholder="Enter lambda value"
            step="0.001"
            min="0"
            required
          />
        </div>
        <Button type="submit">Generate Table</Button>
      </form>

      {errorMessage && (
        <Alert variant="destructive" className="mt-4">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}

      {tableData.length > 0 && (
        <div className="custom-scrollbar overflow-auto max-h-[60vh] border rounded-md mt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="sticky top-0 bg-background z-10">
                  Trial
                </TableHead>
                {Array.from({ length: tableData[0].length }, (_, i) => (
                  <TableHead
                    key={i}
                    className="sticky top-0 bg-background z-10"
                  >
                    {i}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Probability</TableCell>
                {tableData[0].map((_, i) => (
                  <TableCell key={i}>{tableData[0][i]}</TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
