import Colors from '@/utils/styles/colors'
import React from 'react'

interface LogoProps {
    width?: number
    height?: number
    colorIcon?: string
}

const Logo: React.FC<LogoProps> = ({
    width = 32,
    height = 34,
    colorIcon = Colors.Neutral['25'].hex,
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 32 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_94_1217)">
                <path
                    d="M5.06719 11.6562C5.06719 10.9036 5.48964 10.2148 6.16041 9.87358L6.87086 9.51218C8.28087 8.79494 8.33942 6.80204 6.97395 6.00325L6.07707 5.47859C5.45327 5.11367 4.68112 5.11367 4.05732 5.47859L0.990123 7.27287C0.376894 7.6316 0 8.28873 0 8.99918V23.8075C0 24.5386 0.398882 25.2114 1.04028 25.5622L15.0552 33.2277C15.6578 33.5572 16.3873 33.5546 16.9874 33.2206L30.7452 25.565C31.3794 25.2121 31.7727 24.5432 31.7727 23.8174V8.99918C31.7727 8.28873 31.3958 7.6316 30.7826 7.27287L27.6864 5.46164C27.0781 5.1058 26.3275 5.09635 25.7105 5.43675L13.943 11.9284C12.5751 12.683 12.5617 14.6443 13.9192 15.4175L15.0315 16.0511C15.6462 16.4012 16.4 16.4005 17.0141 16.0494L23.8497 12.1409C25.183 11.3785 26.8424 12.3412 26.8424 13.8771V21.3527C26.8424 22.087 26.44 22.7622 25.7942 23.1117L16.8442 27.9547C16.247 28.2778 15.5267 28.2759 14.9313 27.9496L6.1061 23.1138C5.46547 22.7627 5.06719 22.0904 5.06719 21.3598V11.6562Z"
                    fill={colorIcon}
                />
                <path
                    d="M16.6108 5.84025C16.0332 6.13752 15.3471 6.13569 14.771 5.83534L10.8684 3.80062C9.53395 3.10484 9.51556 1.20177 10.8364 0.480344V0.480344C11.3861 0.180072 12.0492 0.173016 12.6052 0.461523L14.9535 1.68005C15.5444 1.98666 16.2492 1.97916 16.8334 1.66005L18.9798 0.487709C19.5353 0.184265 20.2079 0.188066 20.76 0.497771V0.497771C22.0376 1.21447 22.0044 3.06471 20.7018 3.73501L16.6108 5.84025Z"
                    fill={colorIcon}
                />
            </g>
            <defs>
                <clipPath id="clip0_94_1217">
                    <rect width="32" height="34" fill={colorIcon} />
                </clipPath>
            </defs>
        </svg>
    )
}

export default Logo