import React from 'react'

interface LogoProps {
    width?: number
    height?: number
    colorText?: string
    colorIcon?: string
}

const Logo: React.FC<LogoProps> = ({
    width = 297,
    height = 70,
    colorText = '#000',
    colorIcon = '#000',
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 149 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_90_33)">
                <path
                    d="M4.30603 12.7692C4.30603 12.4072 4.50167 12.0735 4.81754 11.8967L7.16034 10.5851C7.81847 10.2166 7.84735 9.27998 7.21318 8.87169L4.84737 7.34852C4.51769 7.13627 4.09438 7.13627 3.7647 7.34852L0.458666 9.47703C0.172774 9.66109 0 9.97781 0 10.3178V25.2383C0 25.5891 0.183767 25.9142 0.484274 26.0951L13.0962 33.6869C13.4158 33.8793 13.816 33.8777 14.1342 33.6829L26.5223 26.0962C26.8191 25.9144 27 25.5914 27 25.2434V10.3178C27 9.97781 26.8272 9.66109 26.5413 9.47703L23.2197 7.33851C22.8981 7.13142 22.4865 7.12599 22.1594 7.32453L10.5794 14.3553C9.94342 14.7414 9.93683 15.6621 10.5673 16.0573L13.0842 17.6351C13.4095 17.8391 13.823 17.8387 14.148 17.6342L21.2777 13.1475C21.9436 12.7284 22.8103 13.207 22.8103 13.9938V22.945C22.8103 23.2975 22.6248 23.6239 22.322 23.8042L14.0149 28.7514C13.6979 28.9402 13.3027 28.9391 12.9868 28.7485L4.7896 23.805C4.48949 23.624 4.30603 23.2992 4.30603 22.9487V12.7692Z"
                    fill={colorIcon}
                />
                <path
                    d="M13.5456 3L9.62266 5.85307C8.9638 6.33223 8.03915 5.86469 8.0345 5.05003L8.01122 0.968062C8.00656 0.149973 8.93269 -0.327262 9.5962 0.151323L13.5456 3L17.2756 0.200861C17.9348 -0.293826 18.8759 0.176522 18.8759 1.00069V4.9993C18.8759 5.82348 17.9348 6.29383 17.2756 5.79914L13.5456 3Z"
                    fill={colorIcon}
                />
            </g>

            <path
                d="M46.2228 27.3478C44.8957 27.3478 43.6693 27.1166 42.5438 26.6542C41.4182 26.1746 40.4355 25.5152 39.5955 24.6759C38.7723 23.8366 38.134 22.8603 37.6804 21.747C37.2268 20.6166 37 19.392 37 18.0731C37 16.7714 37.2268 15.5639 37.6804 14.4506C38.1508 13.3202 38.8059 12.3439 39.6459 11.5217C40.4859 10.6825 41.4686 10.0316 42.5942 9.56917C43.7365 9.10672 44.9629 8.87549 46.2732 8.87549C47.1972 8.87549 48.0875 9.00395 48.9443 9.26087C49.8011 9.51779 50.5738 9.87747 51.2626 10.3399C51.9514 10.8024 52.5225 11.3248 52.9761 11.9071L50.9098 14.1166C50.4394 13.6542 49.9523 13.2688 49.4483 12.9605C48.9611 12.6522 48.4487 12.4124 47.9111 12.2411C47.3736 12.0698 46.8192 11.9842 46.248 11.9842C45.408 11.9842 44.6269 12.1383 43.9045 12.4466C43.1989 12.7549 42.5774 13.1831 42.0398 13.7312C41.519 14.2793 41.1074 14.9216 40.805 15.6581C40.5027 16.3946 40.3515 17.1996 40.3515 18.0731C40.3515 18.9124 40.5027 19.7088 40.805 20.4625C41.1242 21.2161 41.561 21.8755 42.1154 22.4407C42.6698 23.0059 43.3081 23.4513 44.0305 23.7767C44.7697 24.085 45.5508 24.2391 46.374 24.2391C46.9956 24.2391 47.5752 24.1449 48.1127 23.9565C48.6503 23.7681 49.1291 23.5112 49.5491 23.1858C49.9691 22.8432 50.2882 22.4493 50.5066 22.004C50.7418 21.5586 50.8594 21.0791 50.8594 20.5652V20L51.313 20.5395H46.0968V17.5593H54.0849C54.1185 17.7477 54.1437 17.9618 54.1605 18.2016C54.1773 18.4242 54.1857 18.6469 54.1857 18.8696C54.2025 19.0751 54.2109 19.2549 54.2109 19.4091C54.2109 20.5909 54.0093 21.67 53.6061 22.6462C53.2029 23.6054 52.6317 24.4361 51.8926 25.1383C51.1702 25.8406 50.3218 26.3887 49.3475 26.7826C48.3899 27.1594 47.3484 27.3478 46.2228 27.3478Z"
                fill={colorText}
            />
            <path
                d="M57.4485 27.0909V13.5514H60.548V27.0909H57.4485ZM58.9605 10.6739C58.3389 10.6739 57.8517 10.5198 57.4989 10.2115C57.163 9.88603 56.995 9.43215 56.995 8.8498C56.995 8.30171 57.1714 7.85639 57.5241 7.51384C57.8769 7.17128 58.3557 7 58.9605 7C59.5988 7 60.086 7.16271 60.422 7.48814C60.7748 7.79644 60.9512 8.25033 60.9512 8.8498C60.9512 9.38077 60.7748 9.81752 60.422 10.1601C60.0692 10.5026 59.582 10.6739 58.9605 10.6739Z"
                fill={colorText}
            />
            <path
                d="M65.6878 27.0909V12.3439C65.6878 11.5217 65.8642 10.7938 66.217 10.1601C66.5698 9.50922 67.0569 9.00395 67.6785 8.64427C68.3001 8.26746 69.0225 8.07905 69.8456 8.07905C70.4168 8.07905 70.946 8.18182 71.4332 8.38735C71.9203 8.57576 72.3319 8.84124 72.6679 9.1838L71.7103 11.5731C71.492 11.3847 71.2568 11.2391 71.0048 11.1364C70.7696 11.0336 70.5428 10.9822 70.3244 10.9822C69.9884 10.9822 69.7028 11.0422 69.4676 11.1621C69.2493 11.2648 69.0813 11.4275 68.9637 11.6502C68.8629 11.8729 68.8125 12.1383 68.8125 12.4466V27.0909H67.2501C66.9478 27.0909 66.6622 27.0909 66.3934 27.0909C66.1414 27.0909 65.9062 27.0909 65.6878 27.0909ZM63.6215 16.6087V13.834H71.8111V16.6087H63.6215Z"
                fill={colorText}
            />
            <path
                d="M75.881 27.0909V10.1087H78.9804V27.0909H75.881ZM73.2603 16.4802V13.5514H81.8783V16.4802H73.2603Z"
                fill={colorText}
            />
            <path
                d="M97.7944 27.3478C96.7696 27.3478 95.8289 27.2194 94.9721 26.9625C94.1153 26.6884 93.3426 26.2859 92.6538 25.7549C91.965 25.224 91.3519 24.5817 90.8143 23.8281L92.9562 21.3617C93.7794 22.5264 94.5857 23.3314 95.3753 23.7767C96.1649 24.222 97.0552 24.4447 98.0464 24.4447C98.6176 24.4447 99.1383 24.359 99.6087 24.1877C100.079 23.9993 100.449 23.751 100.717 23.4427C100.986 23.1173 101.121 22.749 101.121 22.3379C101.121 22.0468 101.062 21.7813 100.944 21.5415C100.843 21.2846 100.684 21.0619 100.465 20.8735C100.247 20.668 99.9783 20.4796 99.6591 20.3083C99.3399 20.137 98.9787 19.9914 98.5756 19.8715C98.1724 19.7516 97.7272 19.6403 97.24 19.5376C96.3161 19.3491 95.5097 19.1008 94.8209 18.7925C94.1321 18.4671 93.5526 18.0731 93.0822 17.6107C92.6118 17.1311 92.2674 16.6001 92.049 16.0178C91.8306 15.4183 91.7215 14.7418 91.7215 13.9881C91.7215 13.2345 91.881 12.5408 92.2002 11.9071C92.5362 11.2734 92.9898 10.7253 93.561 10.2628C94.1321 9.8004 94.7957 9.44071 95.5517 9.1838C96.3077 8.92688 97.1224 8.79842 97.996 8.79842C98.9871 8.79842 99.8691 8.91831 100.642 9.1581C101.431 9.39789 102.12 9.75758 102.708 10.2372C103.313 10.6996 103.809 11.2648 104.195 11.9328L102.028 14.1166C101.692 13.5856 101.314 13.1489 100.894 12.8063C100.474 12.4466 100.02 12.1812 99.5331 12.0099C99.0459 11.8215 98.5336 11.7273 97.996 11.7273C97.3912 11.7273 96.862 11.8129 96.4084 11.9842C95.9717 12.1555 95.6273 12.4038 95.3753 12.7292C95.1233 13.0376 94.9973 13.4144 94.9973 13.8597C94.9973 14.2022 95.0729 14.5105 95.2241 14.7846C95.3753 15.0415 95.5853 15.2727 95.8541 15.4783C96.1397 15.6838 96.5008 15.8636 96.9376 16.0178C97.3744 16.1719 97.87 16.309 98.4244 16.4289C99.3483 16.6173 100.18 16.8742 100.919 17.1996C101.658 17.5079 102.288 17.8847 102.809 18.33C103.33 18.7582 103.725 19.2549 103.993 19.8202C104.262 20.3682 104.397 20.9848 104.397 21.67C104.397 22.8518 104.119 23.8709 103.565 24.7273C103.027 25.5665 102.263 26.2174 101.272 26.6798C100.281 27.1252 99.1215 27.3478 97.7944 27.3478Z"
                fill={colorText}
            />
            <path
                d="M109.46 33L112.283 26.3459L112.308 28.4526L105.756 13.5514H109.334L112.988 22.3893C113.106 22.612 113.223 22.9117 113.341 23.2885C113.459 23.6482 113.559 24.0079 113.643 24.3676L113.013 24.5731C113.131 24.2477 113.257 23.9051 113.391 23.5455C113.526 23.1686 113.652 22.7833 113.769 22.3893L116.894 13.5514H120.497L114.954 27.0909L112.686 33H109.46Z"
                fill={colorText}
            />
            <path
                d="M122.431 27.0909V13.5514H125.455L125.505 16.3261L124.926 16.6344C125.094 16.0178 125.421 15.4611 125.908 14.9644C126.396 14.4506 126.975 14.0395 127.647 13.7312C128.319 13.4229 129.008 13.2688 129.713 13.2688C130.721 13.2688 131.561 13.4743 132.233 13.8854C132.922 14.2964 133.434 14.913 133.77 15.7352C134.123 16.5573 134.3 17.585 134.3 18.8182V27.0909H131.2V19.0494C131.2 18.3643 131.108 17.7991 130.923 17.3538C130.738 16.8913 130.453 16.5573 130.066 16.3518C129.68 16.1291 129.209 16.0264 128.655 16.0435C128.201 16.0435 127.781 16.1206 127.395 16.2747C127.025 16.4117 126.698 16.6173 126.412 16.8913C126.144 17.1482 125.925 17.448 125.757 17.7905C125.606 18.1331 125.53 18.5099 125.53 18.9209V27.0909H123.993C123.691 27.0909 123.405 27.0909 123.136 27.0909C122.884 27.0909 122.649 27.0909 122.431 27.0909Z"
                fill={colorText}
            />
            <path
                d="M143.481 27.3478C142.238 27.3478 141.121 27.0395 140.13 26.4229C139.139 25.8063 138.358 24.9671 137.786 23.9051C137.215 22.8432 136.93 21.6443 136.93 20.3083C136.93 18.9723 137.215 17.7734 137.786 16.7115C138.358 15.6495 139.139 14.8103 140.13 14.1937C141.121 13.5771 142.238 13.2688 143.481 13.2688C144.674 13.2688 145.758 13.5 146.732 13.9625C147.706 14.4249 148.462 15.0672 149 15.8893L147.286 17.996C147.034 17.6364 146.715 17.3109 146.329 17.0198C145.943 16.7286 145.531 16.4974 145.094 16.3261C144.657 16.1548 144.221 16.0692 143.784 16.0692C143.045 16.0692 142.381 16.2576 141.793 16.6344C141.222 16.9941 140.768 17.4993 140.432 18.1502C140.096 18.7839 139.928 19.5033 139.928 20.3083C139.928 21.1133 140.096 21.8327 140.432 22.4664C140.785 23.1001 141.256 23.6054 141.844 23.9822C142.431 24.359 143.087 24.5474 143.809 24.5474C144.246 24.5474 144.666 24.4789 145.069 24.3419C145.489 24.1877 145.884 23.9737 146.253 23.6996C146.623 23.4256 146.967 23.083 147.286 22.6719L149 24.8043C148.429 25.558 147.639 26.1746 146.631 26.6542C145.64 27.1166 144.59 27.3478 143.481 27.3478Z"
                fill={colorText}
            />
            <defs>
                <clipPath id="clip0_90_33">
                    <rect width="27" height="34" rx="3" fill={colorText} />
                </clipPath>
            </defs>
        </svg>
    )
}

export default Logo
