"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    Lightning,
    HeartStraight,
    Users,
    ArrowRight,
} from '@phosphor-icons/react';

/* Ambient floating orbs in brand colors */
function FloatingOrbs() {
    const orbs = [
        { x: '10%', y: '20%', size: 320, delay: 0, duration: 14, color: 'rgba(25, 57, 212, 0.2)' },
        { x: '80%', y: '10%', size: 280, delay: 2, duration: 18, color: 'rgba(200, 230, 14, 0.08)' },
        { x: '60%', y: '70%', size: 200, delay: 1, duration: 12, color: 'rgba(77, 124, 254, 0.12)' },
        { x: '25%', y: '80%', size: 260, delay: 3, duration: 16, color: 'rgba(25, 57, 212, 0.1)' },
    ];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {orbs.map((orb, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        left: orb.x, top: orb.y,
                        width: orb.size, height: orb.size,
                        backgroundColor: orb.color,
                        filter: 'blur(80px)',
                    }}
                    animate={{
                        y: [0, -30, 0, 20, 0],
                        x: [0, 15, -10, 8, 0],
                        scale: [1, 1.08, 1, 0.95, 1],
                    }}
                    transition={{
                        duration: orb.duration, repeat: Infinity,
                        ease: 'easeInOut', delay: orb.delay,
                    }}
                />
            ))}
        </div>
    );
}

/* Quick stat pill */
function StatPill({ icon: Icon, value, label, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-surface/60 border border-border backdrop-blur-sm"
        >
            <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary-light">
                <Icon weight="duotone" className="w-4.5 h-4.5" />
            </div>
            <div>
                <p className="text-lg font-black text-ink leading-none">{value}</p>
                <p className="text-xs font-medium text-ink-muted mt-0.5">{label}</p>
            </div>
        </motion.div>
    );
}

export default function Hero() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.4 },
        },
    };

    const lineVariants = {
        hidden: { opacity: 0, y: 50, filter: 'blur(12px)' },
        visible: {
            opacity: 1, y: 0, filter: 'blur(0px)',
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        },
    };

    return (
        <section
            ref={ref}
            id="hero"
            className="relative min-h-[100dvh] flex items-center overflow-hidden"
        >
            {/* Background layers */}
            <div className="absolute inset-0 bg-canvas" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(25,57,212,0.15),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,rgba(200,230,14,0.05),transparent_50%)]" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-canvas to-transparent" />

            <FloatingOrbs />

            {/* Content */}
            <div className="relative z-10 container-premium w-full pt-28 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left: Text Block */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        className="lg:col-span-7"
                    >
                        {/* Eyebrow Badge */}
                        <motion.div variants={lineVariants} className="mb-6">
                            <div className="pill-badge bg-primary/10 border border-primary/20 text-primary-light">
                                <Lightning weight="fill" className="w-3.5 h-3.5" />
                                <span>FPT University x Cộng Đồng</span>
                            </div>
                        </motion.div>

                        {/* Staggered Headline */}
                        <div className="space-y-1 mb-8">
                            <motion.h1
                                variants={lineVariants}
                                className="heading-display text-ink"
                            >
                                Phòng Ngừa
                            </motion.h1>
                            <motion.h1
                                variants={lineVariants}
                                className="heading-display text-gradient-brand"
                            >
                                Đột Quỵ
                            </motion.h1>
                            <motion.h1
                                variants={lineVariants}
                                className="heading-display text-ink/80"
                            >
                                Trước Khi Quá Muộn.
                            </motion.h1>
                        </div>

                        {/* Subtitle */}
                        <motion.p
                            variants={lineVariants}
                            className="text-body text-lg mb-10 max-w-xl"
                        >
                            Tham gia giải cầu lông cộng đồng kết hợp tầm soát sức khỏe miễn phí.
                            Cùng xây dựng thói quen sống lành mạnh cho thế hệ trẻ Việt Nam.
                        </motion.p>

                        {/* CTA Group */}
                        <motion.div
                            variants={lineVariants}
                            className="flex flex-wrap items-center gap-4"
                        >
                            <motion.a
                                href="#register"
                                className="btn-primary"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <span>Đăng Ký Thi Đấu</span>
                                <span className="w-7 h-7 rounded-full bg-canvas/15 flex items-center justify-center">
                                    <ArrowRight weight="bold" className="w-3.5 h-3.5" />
                                </span>
                            </motion.a>

                            <motion.a
                                href="#reality"
                                className="btn-outline"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                Tìm Hiểu Thêm
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Right: Stats Column */}
                    <div className="lg:col-span-5 flex flex-col gap-3">
                        <StatPill
                            icon={HeartStraight}
                            value="200K+"
                            label="Ca đột quỵ mỗi năm tại VN"
                            delay={0.8}
                        />
                        <StatPill
                            icon={Users}
                            value="76%"
                            label="Người trẻ chưa biết dấu hiệu"
                            delay={0.95}
                        />
                        <StatPill
                            icon={Lightning}
                            value="4.5h"
                            label="Thời gian vàng cấp cứu"
                            delay={1.1}
                        />

                        {/* Decorative card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-2 p-5 rounded-2xl bg-primary/8 border border-primary/15"
                        >
                            <p className="text-sm font-bold text-primary-light mb-1">
                                Giải Cầu Lông Cộng Đồng
                            </p>
                            <p className="text-xs text-ink-muted leading-relaxed">
                                06/03/2026 · Sân Lê Đức Sport · Thủ Đức, TP.HCM
                            </p>
                            <div className="mt-3 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                <span className="text-xs font-bold text-accent">Đang mở đăng ký</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </section>
    );
}
