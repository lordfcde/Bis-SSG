"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    Hospital,
    Trophy,
    Calendar,
    CheckCircle,
    Circle,
} from '@phosphor-icons/react';

const events = [
    {
        date: '28/02',
        year: '2026',
        title: 'Trạm Offline',
        desc: 'Tầm soát nguy cơ đột quỵ — Đo huyết áp, kiểm tra sức khỏe miễn phí tại khuôn viên FPT University.',
        icon: Hospital,
        status: 'completed',
        color: 'accent',
    },
    {
        date: '06/03',
        year: '2026',
        title: 'Giải Cầu Lông Cộng Đồng',
        desc: 'Sự kiện chính — Giải thể thao vì sức khỏe cộng đồng tại sân cầu lông Lê Đức Sport.',
        icon: Trophy,
        status: 'upcoming',
        color: 'primary',
        highlight: true,
    },
];

export default function Roadmap() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
        visible: {
            opacity: 1, y: 0, filter: 'blur(0px)',
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        },
    };

    return (
        <section id="roadmap" className="relative section-padding overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-canvas via-surface/30 to-canvas" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(25,57,212,0.04),transparent_60%)]" />

            <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="pill-badge bg-primary/10 border border-primary/20 text-primary-light mb-6 mx-auto"
                    >
                        <Calendar weight="duotone" className="w-3.5 h-3.5" />
                        <span>Lộ Trình</span>
                    </motion.div>

                    <h2 className="heading-section text-ink mb-4">
                        Lộ Trình{' '}
                        <span className="text-gradient-brand">Trải Nghiệm</span>
                    </h2>
                    <p className="text-body mx-auto text-center">
                        Hành trình phòng ngừa đột quỵ với các sự kiện được thiết kế khoa học
                    </p>
                </motion.div>

                {/* Timeline */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="relative"
                >
                    {/* Vertical gradient line */}
                    <div className="absolute left-[27px] sm:left-[35px] top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />

                    {events.map((event, i) => {
                        const isCompleted = event.status === 'completed';
                        const isHighlight = event.highlight;
                        return (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className="relative pl-16 sm:pl-24 pb-12 last:pb-0"
                            >
                                {/* Timeline Node */}
                                <div
                                    className={`absolute left-0 sm:left-2 top-0 w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-500 ${isCompleted
                                            ? 'bg-accent/10 border-accent/25 text-accent'
                                            : isHighlight
                                                ? 'bg-primary/10 border-primary/25 text-primary-light'
                                                : 'bg-surface-raised border-border text-ink-muted'
                                        }`}
                                >
                                    <event.icon
                                        weight={isCompleted ? 'fill' : 'duotone'}
                                        className="w-6 h-6"
                                    />
                                </div>

                                {/* Connection line */}
                                <div
                                    className={`absolute left-[55px] sm:left-[75px] top-7 w-8 sm:w-12 h-px ${isCompleted
                                            ? 'bg-accent/25'
                                            : isHighlight
                                                ? 'bg-primary/25'
                                                : 'bg-border'
                                        }`}
                                />

                                {/* Event Card */}
                                <div
                                    className={`relative p-6 sm:p-8 rounded-2xl border transition-all duration-500 hover:-translate-y-1 ${isHighlight
                                            ? 'bg-primary/[0.05] border-primary/20 hover:border-primary/35'
                                            : isCompleted
                                                ? 'bg-accent/[0.03] border-accent/15 hover:border-accent/25'
                                                : 'bg-surface/60 border-border hover:border-border-hover'
                                        }`}
                                >
                                    {/* Status + Date */}
                                    <div className="flex flex-wrap items-center gap-3 mb-4">
                                        <span
                                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${isCompleted
                                                    ? 'bg-accent/10 text-accent'
                                                    : 'bg-primary/10 text-primary-light'
                                                }`}
                                        >
                                            {isCompleted ? (
                                                <>
                                                    <CheckCircle weight="fill" className="w-3 h-3" />
                                                    Đã diễn ra
                                                </>
                                            ) : (
                                                <>
                                                    <Circle weight="duotone" className="w-3 h-3" />
                                                    Sắp diễn ra
                                                </>
                                            )}
                                        </span>

                                        <span className={`font-mono font-bold text-sm ${isCompleted ? 'text-accent' : 'text-primary-light'
                                            }`}>
                                            {event.date}/{event.year}
                                        </span>
                                    </div>

                                    <h3 className="text-xl sm:text-2xl font-black text-ink mb-3 leading-snug">
                                        {event.title}
                                    </h3>

                                    <p className="text-ink-secondary text-sm sm:text-base leading-relaxed">
                                        {event.desc}
                                    </p>

                                    {/* Bottom accent for highlighted */}
                                    {isHighlight && (
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-b-2xl opacity-50" />
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <p className="text-ink-muted text-sm mb-4">
                        Tham gia cùng chúng tôi trong hành trình phòng ngừa đột quỵ
                    </p>
                    <motion.a
                        href="#badminton"
                        className="inline-flex items-center gap-2 text-primary-light font-bold hover:text-accent transition-colors"
                        whileHover={{ x: 4 }}
                    >
                        Xem chi tiết sự kiện
                        <span className="text-lg">&#8594;</span>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
