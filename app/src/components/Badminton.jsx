import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    Clock,
    MapPin,
    Trophy,
    Star,
    Flame,
    CaretRight,
    ArrowRight,
} from '@phosphor-icons/react';

const details = [
    {
        icon: Clock,
        label: 'Thời gian',
        value: '17H - 21H, Ngày 06/03/2026',
    },
    {
        icon: MapPin,
        label: 'Địa điểm',
        value: 'Sân cầu lông Lê Đức Sport',
        sub: '306 Võ Văn Hát, Long Trường, Thủ Đức, TP.HCM',
        link: 'https://maps.app.goo.gl/5SzScNYbcW71vXaE6',
    },
    {
        icon: Trophy,
        label: 'Thể thức',
        value: '2 vs 2 (Đôi nam - nữ)',
    },
    {
        icon: Star,
        label: 'Trình độ',
        value: 'Yếu - Trung bình (Dành cho người mới)',
    },
];

const sponsors = [
    { name: 'FPT University', initial: 'FPT' },
    { name: 'Lê Đức Sport', initial: 'LD' },
];

/* Floating ambient orbs in brand colors */
function FloatingOrbs() {
    const orbs = [
        { x: '8%', y: '15%', size: 240, delay: 0, duration: 14, color: 'rgba(25, 57, 212, 0.18)' },
        { x: '82%', y: '20%', size: 300, delay: 2, duration: 18, color: 'rgba(200, 230, 14, 0.06)' },
        { x: '70%', y: '75%', size: 200, delay: 1, duration: 12, color: 'rgba(77, 124, 254, 0.1)' },
        { x: '20%', y: '65%', size: 260, delay: 3, duration: 15, color: 'rgba(25, 57, 212, 0.08)' },
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
                        filter: 'blur(90px)',
                    }}
                    animate={{
                        y: [0, -35, 0, 25, 0],
                        x: [0, 18, -12, 8, 0],
                        scale: [1, 1.08, 1, 0.96, 1],
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

export default function Badminton() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
        visible: {
            opacity: 1, y: 0, filter: 'blur(0px)',
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
    };

    return (
        <section id="badminton" className="relative section-padding overflow-hidden">
            {/* Background — Deep Blue */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A1232] via-[#0D1B44] to-canvas" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(25,57,212,0.12),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(200,230,14,0.04),transparent_50%)]" />

            {/* Court Lines Decoration */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[50%] border border-white/20 rounded-lg" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-[50%] bg-white/20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-px bg-white/20" />
            </div>

            <FloatingOrbs />

            <div ref={ref} className="relative z-10 container-premium">
                {/* Header — Staggered Massive Title */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="text-center mb-16 md:mb-20"
                >
                    {/* Badge */}
                    <motion.div variants={itemVariants} className="mb-8">
                        <div className="pill-badge bg-primary/15 border border-primary/25 text-primary-light mx-auto">
                            <Flame weight="fill" className="w-3.5 h-3.5" />
                            <span>Sự Kiện Chính</span>
                        </div>
                    </motion.div>

                    {/* Title Lines */}
                    <div className="space-y-1">
                        <motion.h2
                            variants={itemVariants}
                            className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-ink"
                        >
                            GIẢI CẦU LÔNG
                        </motion.h2>
                        <motion.h2
                            variants={itemVariants}
                            className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-gradient-brand"
                        >
                            VÌ SỨC KHỎE
                        </motion.h2>
                        <motion.h2
                            variants={itemVariants}
                            className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-ink/80"
                        >
                            CỘNG ĐỒNG
                        </motion.h2>
                    </div>
                </motion.div>

                {/* Details Grid — Glass Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
                >
                    {details.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="group relative"
                        >
                            <div className="relative h-full p-6 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/[0.06] hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.05]">
                                {/* Icon */}
                                <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary-light">
                                    <item.icon weight="duotone" className="w-5 h-5" />
                                </div>

                                {/* Content */}
                                <p className="text-ink-muted text-xs font-bold uppercase tracking-wider mb-2">
                                    {item.label}
                                </p>
                                <p className="text-ink font-bold text-sm leading-snug group-hover:text-primary-light transition-colors">
                                    {item.value}
                                </p>
                                {item.sub && (
                                    <p className="text-ink-muted text-xs mt-2 leading-relaxed">
                                        {item.sub}
                                    </p>
                                )}
                                {item.link && (
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-primary-light text-xs mt-3 hover:text-accent transition-colors group/link"
                                    >
                                        <MapPin weight="fill" className="w-3 h-3" />
                                        Xem bản đồ
                                        <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                                    </a>
                                )}

                                {/* Bottom accent */}
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Sponsors */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mb-12"
                >
                    <p className="text-ink-muted text-xs uppercase tracking-[0.2em] mb-6 font-bold">
                        Đồng hành cùng
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        {sponsors.map((sponsor, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-primary/20 transition-colors"
                            >
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <span className="text-xs font-black text-primary-light">
                                        {sponsor.initial}
                                    </span>
                                </div>
                                <span className="text-ink/70 font-bold text-sm">
                                    {sponsor.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center"
                >
                    <motion.a
                        href="#register"
                        className="group relative inline-flex items-center gap-3 btn-primary text-base"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        {/* Shine effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />

                        <span className="relative z-10">Đăng Ký Thi Đấu Ngay</span>
                        <motion.span
                            className="relative z-10"
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <CaretRight weight="bold" className="w-5 h-5" />
                        </motion.span>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
