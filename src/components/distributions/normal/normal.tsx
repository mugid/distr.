"use client"
import { useState, useMemo } from "react"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Area, AreaChart, CartesianGrid, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

export default function NormalDistribution() {
  const [variant, setVariant] = useState("")
  const [mean, setMean] = useState("")
  const [stdDev, setStdDev] = useState("")
  const [comparison, setComparison] = useState<">" | "<" | "">("")
  const [errorMessage, setErrorMessage] = useState("")
  const [showGraph, setShowGraph] = useState(false)
  const [probability, setProbability] = useState<number | null>(null)

  const selectComparison = (value: string) => {
    setComparison(value as ">" | "<")
  }

  // Generate normal distribution data points
  const normalDistributionData = useMemo(() => {
    const data = []
    // Generate points from -4 to 4 standard deviations
    for (let i = -4; i <= 4; i += 0.1) {
      const x = Number.parseFloat(i.toFixed(1))
      // PDF of normal distribution
      const y = (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-(x * x) / 2)
      data.push({ x, y })
    }
    return data
  }, [])

  // Calculate Z-score
  const calculateZScore = (value: number, meanValue: number, stdDevValue: number) => {
    return (value - meanValue) / stdDevValue
  }

  // Calculate probability (area under the curve)
  const calculateProbability = (zScore: number, comparisonOp: "<" | ">") => {
    // Using the error function to approximate the cumulative distribution function
    const cdf = (z: number) => {
      // Approximation of the error function
      const t = 1.0 / (1.0 + 0.2316419 * Math.abs(z))
      const d = 0.3989423 * Math.exp((-z * z) / 2)
      const p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))))
      if (z > 0) {
        return 1 - p
      } else {
        return p
      }
    }

    if (comparisonOp === "<") {
      return cdf(zScore)
    } else {
      return 1 - cdf(zScore)
    }
  }

  const generateGraph = (e: React.FormEvent) => {
    e.preventDefault()
    const variantValue = Number.parseFloat(variant)
    const meanValue = Number.parseFloat(mean)
    const stdDevValue = Number.parseFloat(stdDev)

    if (isNaN(variantValue) || isNaN(meanValue) || isNaN(stdDevValue) || stdDevValue <= 0) {
      setErrorMessage("Please enter valid numbers. Standard deviation should be positive.")
      setShowGraph(false)
      return
    }

    if (!comparison) {
      setErrorMessage("Please select a comparison operator (< or >).")
      setShowGraph(false)
      return
    }

    setErrorMessage("")
    setShowGraph(true)

    // Calculate z-score and probability
    const zScore = calculateZScore(variantValue, meanValue, stdDevValue)
    const prob = calculateProbability(zScore, comparison)
    setProbability(prob)
  }

  return (
    <div className="container mx-auto mt-4 space-y-6">
      <form onSubmit={generateGraph} className="space-y-4">
        <div>
          <Label htmlFor="variant">Variant</Label>
          <div className="flex items-center gap-x-2">
            <Select onValueChange={selectComparison}>
              <SelectTrigger className="w-1/4">
                <SelectValue placeholder="< or >?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value=">">Bigger than</SelectItem>
                <SelectItem value="<">Less than</SelectItem>
              </SelectContent>
            </Select>
            <Input
              id="variant"
              value={variant}
              onChange={(e) => setVariant(e.target.value)}
              placeholder="Enter your variant"
              className="w-3/4"
              required
            />
          </div>
        </div>
        <div>
          <Label htmlFor="mean">Mean Value</Label>
          <Input
            id="mean"
            value={mean}
            type="number"
            onChange={(e) => setMean(e.target.value)}
            placeholder="Enter mean value"
            required
          />
        </div>
        <div>
          <Label htmlFor="stdDev">Standard Deviation</Label>
          <Input
            id="stdDev"
            value={stdDev}
            type="number"
            onChange={(e) => setStdDev(e.target.value)}
            placeholder="Enter standard deviation"
            required
          />
        </div>
        <Button type="submit">Generate Graph</Button>
      </form>

      {errorMessage && (
        <Alert variant="destructive">
          <AlertDescription className="flex items-center gap-x-2">
            <AlertCircle className="w-4 h-4" />
            {errorMessage}
          </AlertDescription>
        </Alert>
      )}

      {showGraph && (
        <Card className="p-4">
          <CardContent className="pt-6">
            <div className="mb-4">
              <h3 className="text-lg font-medium">Normal Distribution Graph</h3>
              {probability !== null && (
                <p className="text-sm text-muted-foreground">
                  Probability P({comparison} {variant}) = {(probability * 100).toFixed(4)}%
                </p>
              )}
            </div>
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={normalDistributionData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" label={{ value: "Standard Deviations (σ)", position: "insideBottom", offset: -5 }} />
                <YAxis label={{ value: "Probability Density", angle: -90, position: "insideLeft" }} />
                <Tooltip formatter={(value: number) => value.toFixed(4)} />

                {/* Normal distribution curve */}
                <Area type="monotone" dataKey="y" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />

                {/* Shaded area based on comparison */}
                {comparison && variant && mean && stdDev && (
                  <Area
                    type="monotone"
                    dataKey={(data) => {
                      const zScore = calculateZScore(
                        Number.parseFloat(variant),
                        Number.parseFloat(mean),
                        Number.parseFloat(stdDev),
                      )
                      if (comparison === "<" && data.x < zScore) {
                        return data.y
                      } else if (comparison === ">" && data.x > zScore) {
                        return data.y
                      }
                      return 0
                    }}
                    stroke="#82ca9d"
                    fill="#82ca9d"
                    fillOpacity={0.8}
                  />
                )}

                {/* Z-score reference line */}
                {variant && mean && stdDev && (
                  <ReferenceLine
                    x={calculateZScore(Number.parseFloat(variant), Number.parseFloat(mean), Number.parseFloat(stdDev))}
                    stroke="red"
                    label={{
                      value: `Z = ${calculateZScore(Number.parseFloat(variant), Number.parseFloat(mean), Number.parseFloat(stdDev)).toFixed(2)}`,
                      position: "top",
                    }}
                  />
                )}
              </AreaChart>
            </ResponsiveContainer>

            <div className="mt-4 text-sm text-muted-foreground">
              <p>
                The graph shows a standard normal distribution with the{" "}
                {comparison === "<" ? "area to the left" : "area to the right"} of Z ={" "}
                {variant &&
                  mean &&
                  stdDev &&
                  calculateZScore(
                    Number.parseFloat(variant),
                    Number.parseFloat(mean),
                    Number.parseFloat(stdDev),
                  ).toFixed(2)}{" "}
                shaded.
              </p>
              <p className="mt-2">
                This represents the probability that a random variable with mean {mean} and standard deviation {stdDev}{" "}
                is
                {comparison === "<" ? " less than " : " greater than "} {variant}.
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
