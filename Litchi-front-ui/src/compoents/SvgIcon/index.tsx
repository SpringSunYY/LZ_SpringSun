import React, { SVGProps } from 'react';

interface SvgIconProps extends SVGProps<SVGSVGElement> {
    name: string;
    prefix?: string;
    color?: string; // color可以传递，默认为 currentColor
    size?: string | number; // 控制大小，接受字符串或数字
}

const MySvgIcon: React.FC<SvgIconProps> = ({
                                             name,
                                             prefix = 'icon',
                                             color = 'currentColor', // 默认使用 currentColor
                                             size = '1em', // 默认大小是1em，可以调整为相对大小
                                             ...props
                                         }) => {
    const symbolId = `#${prefix}-${name}`;

    return (
        <svg
            {...props}
            aria-hidden="true"
            width={size}  // 控制宽度
            height={size} // 控制高度
            style={{ fill: color }} // 设置颜色
        >
            <use href={symbolId} />
        </svg>
    );
};

export default MySvgIcon;
