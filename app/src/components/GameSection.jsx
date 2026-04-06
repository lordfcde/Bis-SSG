import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GameController, Play, Info } from '@phosphor-icons/react';

export default function GameSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section
            ref={ref}
            id="game"
            className="relative section-padding overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-canvas" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/5" style={{ filter: 'blur(120px)' }} />

            <div className="relative z-10 container-premium">
                {/* Asymmetric Header */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-8"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary-light flex items-center justify-center">
                                <GameController weight="duotone" className="w-5 h-5" />
                            </div>
                            <span className="text-primary-light font-bold text-sm tracking-wider uppercase">
                                Trải Nghiệm Thực Tế
                            </span>
                        </div>

                        <h2 className="heading-section text-ink text-balance">
                            Kiểm tra{' '}
                            <span className="text-gradient-brand">nhận thức</span> của bạn
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-4 lg:text-right lg:pt-8"
                    >
                        <p className="text-body text-sm">
                            Đột quỵ không chừa một ai. Hãy kiểm tra thói quen của bạn qua mini-game tương tác.
                        </p>
                    </motion.div>
                </div>

                {/* Game Container — Double Bezel */}
                <motion.div
                    initial={{ opacity: 0, y: 60, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="relative max-w-4xl mx-auto"
                >
                    {/* Glow */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/15 via-primary/8 to-primary/15 rounded-[2rem] opacity-60" style={{ filter: 'blur(20px)' }} />

                    {/* Double Bezel Outer */}
                    <div className="double-bezel">
                        <div className="bezel-inner">
                            {/* Game Header Bar */}
                            <div className="flex items-center justify-between px-5 py-3 border-b border-border">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                                    <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                                </div>
                                <span className="text-xs text-ink-muted font-mono tracking-wider">
                                    before-it-strikes.scratch
                                </span>
                                <div />
                            </div>

                            {/* Iframe */}
                            <div className="relative aspect-[4/3] bg-surface">
                                <iframe
                                    src="https://scratch.mit.edu/projects/1286438576/embed"
                                    allowTransparency="true"
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    scrolling="no"
                                    allowFullScreen
                                    title="Before It Strikes Mini Game"
                                    className="absolute inset-0"
                                />

                                {/* Play hint */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.5 }}
                                    className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs text-ink-muted"
                                >
                                    <Play weight="fill" className="w-3 h-3 text-accent" />
                                    Nhấn vào lá cờ xanh để bắt đầu
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Info Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-8 text-center"
                >
                    <div className="inline-flex items-center gap-2 text-ink-muted text-sm">
                        <Info weight="regular" className="w-4 h-4" />
                        <span>Trò chơi được phát triển trên nền tảng Scratch MIT</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
