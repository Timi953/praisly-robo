import { LineChart, Line, Area, AreaChart, ResponsiveContainer } from 'recharts'

export function MiniSparkline({
  data,
  color = 'currentColor',
  height = 32,
  width = 80,
  strokeWidth = 1.5,
  showEndDot = false,
  fillArea = false,
}: {
  data: number[]
  color?: string
  height?: number
  width?: number
  strokeWidth?: number
  showEndDot?: boolean
  fillArea?: boolean
}) {
  const chartData = data.map((v, i) => ({ v, i }))

  if (fillArea) {
    return (
      <div style={{ width, height }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id={`spark-fill-${color.replace(/[^a-z0-9]/gi, '')}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={0.2} />
                <stop offset="100%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="v"
              stroke={color}
              strokeWidth={strokeWidth}
              fill={`url(#spark-fill-${color.replace(/[^a-z0-9]/gi, '')})`}
              dot={showEndDot ? (props: any) => {
                if (props.index === chartData.length - 1) {
                  return <circle cx={props.cx} cy={props.cy} r={2.5} fill={color} key="end" />
                }
                return <g key={props.index} />
              } : false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    )
  }

  return (
    <div style={{ width, height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <Line
            type="monotone"
            dataKey="v"
            stroke={color}
            strokeWidth={strokeWidth}
            dot={showEndDot ? (props: any) => {
              if (props.index === chartData.length - 1) {
                return <circle cx={props.cx} cy={props.cy} r={2.5} fill={color} key="end" />
              }
              return <g key={props.index} />
            } : false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
