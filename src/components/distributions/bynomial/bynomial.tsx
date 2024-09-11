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

export default function BynomialDistribution() {
  const [numTrials, setNumTrials] = useState("");
  const [probability, setProbability] = useState("");
  const [expValue, setExpValue] = useState(0);
  const [variance, setVariance] = useState(0);
  const [stdDev, setStdDev] = useState(0);
  const [tableData, setTableData] = useState<number[][]>([]);
  const [trialsErrorMessage, setTrialsErrorMessage] = useState("");

  function factorial(num: number): number {
    let rval = 1;
    for (let i = 2; i <= num; i++) rval = rval * i;
    return rval;
  }

  const generateTable = (e: React.FormEvent) => {
    e.preventDefault();
    const trials = parseInt(numTrials);
    const prob = parseFloat(probability);

    setExpValue(trials * prob);
    setVariance(trials * prob * (1 - prob));
    setStdDev(Math.sqrt(trials * prob * (1 - prob)));

    if (isNaN(trials) || trials <= 0) {
      setTrialsErrorMessage(
        "Please enter valid numbers. Number of trials should be a positive integer."
      );
      return;
    }

    const newTableData = [];
    const row = [];
    for (let j = 0; j <= trials; j++) {
      const totalProb =
        (factorial(trials) / (factorial(j) * factorial(trials - j))) *
        Math.pow(prob, j) *
        Math.pow(1 - prob, trials - j);
      row.push(totalProb);
    }
    newTableData.push(row);
    setTableData(newTableData);
  };

  console.log(tableData);

  return (
    <div className="container mx-auto mt-4 space-y-6">
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
          {trialsErrorMessage && (
            <Alert variant="destructive" className="mt-2">
              <AlertDescription className="flex items-center gap-x-2">
                <AlertCircle className="w-4 h-4" />
                {trialsErrorMessage}
              </AlertDescription>
            </Alert>
          )}
        </div>
        <div>
          <Label htmlFor="probability">Probability of Success</Label>
          <Input
            id="probability"
            type="number"
            value={probability}
            onChange={(e) => setProbability(e.target.value)}
            placeholder="Enter probability (0-1)"
            step="0.01"
            min="0"
            max="1"
            required
          />
        </div>
        <Button type="submit">Generate Table</Button>
      </form>

      {tableData.length > 0 && (
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Trials</TableHead>
                {Array.from({ length: tableData[0].length }, (_, i) => (
                  <TableHead key={i}>{i}</TableHead>
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
          <div>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">
              Characteristics
            </h4>
            <p className="leading-7 [&:not(:first-child)]:mt-4">
              Expected value: {expValue}
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-4">
              Variance: {variance}
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-4">
              Standard deviation: {stdDev}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
