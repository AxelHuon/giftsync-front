import { NProgress } from '@tanem/react-nprogress'
import React from 'react'

interface ProgressBarProps {
    isAnimating: boolean
}

const ProgressBar: React.FC<ProgressBarProps> = ({ isAnimating }) => {
    return (
        <NProgress isAnimating={isAnimating}>
            {({ isFinished, progress, animationDuration }) => {
                return (
                    <div
                        className={`fixed top-0 left-0 w-full transition-opacity`}
                        style={{
                            opacity: isFinished ? 0 : 1,
                            transitionDuration: `${animationDuration}ms`,
                            zIndex: 99999999999999,
                        }}
                    >
                        <div
                            className={`h-1 bg-primary-500 transition-all`}
                            style={{
                                marginLeft: isFinished
                                    ? '-100%'
                                    : `${(-1 + progress) * 100}%`,
                                transition: isFinished
                                    ? 'none'
                                    : `margin-left ${animationDuration}ms linear`,
                            }}
                        />
                    </div>
                )
            }}
        </NProgress>
    )
}

export default ProgressBar
