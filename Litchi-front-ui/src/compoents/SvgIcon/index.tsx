import React, { SVGProps, useState, useEffect } from 'react';

interface SvgIconProps extends SVGProps<SVGSVGElement> {
    name: string;
    prefix?: string;
    color?: string; // color 可以传递，默认为 currentColor
    size?: string | number; // 控制大小，接受字符串或数字
    onClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

const MySvgIcon: React.FC<SvgIconProps> = ({
                                               name,
                                               prefix = 'icon',
                                               color = 'currentColor', // 默认使用 currentColor
                                               size = '1em', // 默认大小是1em，可以调整为相对大小
                                               ...props
                                           }) => {
    const [isNetwork, setIsNetwork] = useState<boolean>(false);
    const symbolId = `#${prefix}-${name}`;

    // 判断 name 是否是一个网络 URL
    useEffect(() => {
        setIsNetwork(name.startsWith('http') || name.startsWith('https'));
    }, [name]);

    return (
        <svg
            {...props}
            aria-hidden="true"
            width={size}  // 控制宽度
            height={size} // 控制高度
            style={{fill: color}}
        >
            {isNetwork ? (
                // 如果是网络 URL，直接用网络地址
                <use href={name}/>
            ) : (
                // 本地加载，使用 symbolId
                <use href={symbolId}/>
            )}
        </svg>
    );
};

export default MySvgIcon;
