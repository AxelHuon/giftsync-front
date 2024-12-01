import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart'
import Colors from '@/utils/styles/colors'
import { TrendingUp } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Pie, PieChart } from 'recharts'

const chartData = [
    { key: 'Offert', gifts: 25, fill: 'var(--color-chrome)' },
    { key: 'Non offert', gifts: 10, fill: 'var(--color-safari)' },
]
const chartConfig = {
    chrome: {
        label: 'Offert',
        color: Colors.Primary['500'].hex,
    },
    safari: {
        label: 'Safari',
        color: Colors.Primary['25'].hex,
    },
} satisfies ChartConfig

const ChartNbGifts: React.FC = () => {
    const { theme } = useTheme()

    return (
        <Card className="flex flex-col !bg-transparent border-0">
            <CardHeader className="items-center pb-0">
                <CardTitle className={'text-xl text-neutral-900'}>
                    Pourcentages de cadeaux offerts
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 pb-0 ">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px] px-0"
                >
                    <PieChart>
                        <ChartTooltip
                            content={
                                <ChartTooltipContent
                                    nameKey="visitors"
                                    hideLabel
                                />
                            }
                        />
                        <Pie
                            data={chartData}
                            dataKey="gifts"
                            labelLine={false}
                            nameKey="key"
                        />
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 font-medium leading-none">
                    <p className={'text-sm text-neutral-900'}>
                        Il reste {chartData[1].gifts} cadeaux à offrir pour
                        cette famille
                    </p>
                    <TrendingUp
                        color={
                            theme === 'light'
                                ? Colors.Neutral['900'].hex
                                : Colors.Neutral['50'].hex
                        }
                        className="h-4 w-4 "
                    />
                </div>
                <div className="leading-none text-muted-foreground">
                    Vous avez participé à 2 cadeaux
                </div>
            </CardFooter>
        </Card>
    )
}

export default ChartNbGifts
