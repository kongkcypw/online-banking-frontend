import React from 'react';
import { BarChart, barElementClasses } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { chartsGridClasses } from '@mui/x-charts/ChartsGrid';

const SumBarchart = ({ latestSixMonthsThaiNames, groupedData, thaiDate }) => {
    return (
        <div>
            <div className='flex justify-center w-full'>
                <BarChart
                    xAxis={[{
                        scaleType: 'band',
                        data: latestSixMonthsThaiNames,
                        tickLabelPlacement: 'middle',
                    }]}
                    series={[
                        {
                            data: groupedData.map(item => item.IN), name: 'IN', label: 'จำนวนเงินเข้า', color: '#45C2B4' },
                        { data: groupedData.map(item => item.OUT), name: 'OUT', label: 'จำนวนเงินออก', color: '#D64739' }
                    ]}
                    width={400}
                    height={350}
                    margin={{ bottom: 20 }}
                    grid={{ horizontal: true }}
                    slotProps={{
                        legend: {
                            direction: 'row',
                            position: { vertical: 'top', horizontal: 'middle' },
                            padding: 4,
                            labelStyle: {
                                fontSize: 16,
                                fill: 'white',
                                fontFamily: ''
                            }
                        }
                    }}
                    sx={(theme) => ({
                        [`.${axisClasses.root}`]: {
                            [`.${axisClasses.tick}, .${axisClasses.line}`]: {
                                stroke: '#FFFFFF',
                                strokeWidth: 3,
                            },
                            [`.${axisClasses.tickLabel}`]: {
                                fill: '#FFFFFF',
                                fontSize: '1.0em !important',
                                fontFamily: ''
                            }
                        },
                        [`.${chartsGridClasses.root}`]: {
                            [`.${chartsGridClasses.line}`]: {
                                strokeWidth: 0.75,
                                stroke: '#FFFFFF',
                            },
                        }
                    })}
                />
            </div>
            <p className='-mt-2 text-sm text-slate-300'>ข้อมูล ณ วันที่ {thaiDate.fullDate}</p>
        </div>
    );
}

export default SumBarchart;
