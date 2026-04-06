import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import {
    Heartbeat,
    Brain,
    Clock,
    TrendUp,
    Warning,
} from '@phosphor-icons/react';

const stats = [
    {
        icon: Heartbeat,
        value: 200000,
        suffix: '+',
        label: 'Ca đột quỵ mỗi năm',
        note: 'Tại Việt Nam, con số này tăng mỗi năm',
        color: 'primary',
    },
    {
        icon: Brain,
        value: 76,
        suffix: '%',
        label: 'Người trẻ thiếu nhận thức',
        note: 'Không nhận biết được dấu hiệu đột quỵ',
        color: 'accent',
    },
    {
        icon: Clock,
        value: 4.5,
        suffix: 'h',
        label: 'Thời gian vàng cấp cứu',
        note: 'Cần xử lý trong khung giờ đầu tiên',
        color: 'sport',
    },
];

const factors = [
    { icon: Warning, text: 'Tăng huyết áp', risk: '47%' },
    { icon: TrendUp, text: 'Lối sống ít vận động', risk: '36%' },
    { icon: Heartbeat, text: 'Bệnh tim mạch', risk: '28%' },
];

/* Animated counter using Spring */
function AnimatedStat({ value, suffix = '' }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const spring = useSpring(0, { stiffness: 40, damping: 25 });
    const display = useTransform(spring, (v) => {
        if (Number.isInteger(value)) return `${Math.floor(v).toLocaleString('vi-VN')}${suffix}`;
        return `${v.toFixed(1)}${suffix}`;
    });

    useEffect(() => {
        if (isInView) spring.set(value);
    }, [isInView, spring, value]);

    return (
        <motion.span ref={ref} className="font-black text-4xl md:text-5xl tracking-tight text-ink">
            {display}
        </motion.span>
    );
}

export default function Reality() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
        visible: {
            opacity: 1, y: 0, filter: 'blur(0px)',
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
    };

    const getColorClasses = (color) => {
        const map = {
            primary: { bg: 'bg-primary/10', text: 'text-primary-light', border: 'border-primary/20' },
            accent: { bg: 'bg-accent/10', text: 'text-accent', border: 'border-accent/20' },
            sport: { bg: 'bg-sport/10', text: 'text-sport', border: 'border-sport/20' },
        };
        return map[color] || map.primary;
    };

    return (
        <section id="reality" className="relative section-padding overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-canvas via-surface/50 to-canvas" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(25,57,212,0.06),transparent_60%)]" />

            <div ref={ref} className="relative z-10 container-premium">
                {/* Header — Asymmetric Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-7"
                    >
                        <div className="pill-badge bg-primary/10 border border-primary/20 text-primary-light mb-6">
                            <Heartbeat weight="fill" className="w-3.5 h-3.5" />
                            <span>Thực Trạng</span>
                        </div>

                        <h2 className="heading-section text-ink">
                            Đột quỵ{' '}
                            <span className="text-gradient-brand">không chừa ai</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-5 lg:pt-12"
                    >
                        <p className="text-body">
                            Đột quỵ đang ngày càng trẻ hóa. Hiểu biết sớm và hành động kịp thời
                            có thể cứu sống hàng ngàn người mỗi năm.
                        </p>
                    </motion.div>
                </div>

                {/* Stats Grid — Asymmetric Bento */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
                >
                    {stats.map((stat, i) => {
                        const colors = getColorClasses(stat.color);
                        return (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className={`group relative p-7 rounded-2xl bg-surface/80 border ${colors.border} hover:border-opacity-40 transition-all duration-500 hover:-translate-y-1`}
                            >
                                {/* Icon */}
                                <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center mb-5`}>
                                    <stat.icon weight="duotone" className="w-6 h-6" />
                                </div>

                                {/* Animated Number */}
                                <AnimatedStat value={stat.value} suffix={stat.suffix} />

                                {/* Label */}
                                <p className="text-sm font-bold text-ink mt-2 mb-1">{stat.label}</p>
                                <p className="text-caption">{stat.note}</p>

                                {/* Bottom accent */}
                                <div className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-gradient-to-r from-transparent ${colors.text.replace('text-', 'via-')} to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-600`} />
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Risk Factors — Horizontal Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-3"
                >
                    <span className="text-xs font-bold text-ink-muted uppercase tracking-wider py-2">
                        Yếu tố nguy cơ hàng đầu:
                    </span>
                    {factors.map((f, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface/60 border border-border text-sm"
                        >
                            <f.icon weight="duotone" className="w-4 h-4 text-primary-light" />
                            <span className="text-ink-secondary font-medium">{f.text}</span>
                            <span className="text-xs font-black text-accent">{f.risk}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
