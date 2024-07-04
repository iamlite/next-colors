import { Color } from 'next-colors';
import React from 'react';

interface ConversionSectionProps {
    color: Color;
}

const ConversionSection: React.FC<ConversionSectionProps> = ({ color }) => {
    const conversions = {
        RGB: color.toRgb(),
        HSL: color.toHsl(),
        HSV: color.toHsv(),
        CMYK: color.toCmyk(),
        LAB: color.toLab(),
        LCH: color.toLch(),
        XYZ: color.toXyz(),
        YUV: color.toYuv(),
    };

    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-xs m-10 '>
            {Object.entries(conversions).map(([key, value]) => (
                <div
                    key={key}
                    className='bg-zinc-200 p-6 rounded-2xl flex flex-col items-center'>
                    <span className='block mb-4 text-center w-full'>{key}:</span>
                    {Object.entries(value).map(([subKey, subValue]) => (
                        <div
                            key={subKey}
                            className='pl-2 w-full flex justify-between'>
                            <span className='font-bold'>{subKey}: </span>
                            <span>{typeof subValue === 'number' ? subValue.toFixed(2) : subValue}</span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ConversionSection;
