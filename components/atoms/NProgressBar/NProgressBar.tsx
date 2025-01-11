import { NProgress } from '@tanem/react-nprogress'
import React from 'react'

interface ProgressBarProps {
    isAnimating: boolean
}

const ProgressBar: React.FC<ProgressBarProps> = ({ isAnimating }) => {
    return (
        <NProgress isAnimating={isAnimating}>
            {({ isFinished, progress, animationDuration }) => {
                const containerStyles = {
                    opacity: isFinished ? 0 : 1,
                    transition: `opacity ${animationDuration}ms linear`,
                }

                const barStyles = {
                    marginLeft: isFinished
                        ? '-100%'
                        : `${(-1 + progress) * 100}%`,
                    transition: isFinished
                        ? 'none'
                        : `margin-left ${animationDuration}ms linear`,
                }

                return (
                    <div
                        className="fixed z-[99999999999999] top-0 left-0 w-full"
                        style={containerStyles}
                    >
                        <div
                            className="bg-primary-500 h-1 w-full"
                            style={barStyles}
                        />
                    </div>
                )
            }}
        </NProgress>
    )
}

export default ProgressBar
