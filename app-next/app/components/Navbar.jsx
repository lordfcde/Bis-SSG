"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { List, X } from '@phosphor-icons/react';

const navLinks = [
    { label: 'Trang Chủ', href: '#hero' },
    { label: 'Thực Trạng', href: '#reality' },
    { label: 'Trải Nghiệm', href: '#game' },
    { label: 'Lộ Trình', href: '#roadmap' },
    { label: 'Giải Đấu', href: '#badminton' },
];

/* Magnetic link — cursor-tracking offset */
function MagneticLink({ href, children }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouse = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const cx = e.clientX - rect.left - rect.width / 2;
        const cy = e.clientY - rect.top - rect.height / 2;
        x.set(cx * 0.15);
        y.set(cy * 0.3);
    };
    const reset = () => { x.set(0); y.set(0); };

    return (
        <motion.a
            href={href}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            style={{ x, y }}
            className="relative text-sm font-semibold text-ink-secondary hover:text-ink transition-colors duration-300 py-1"
        >
            {children}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
        </motion.a>
    );
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const menuVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.06, delayChildren: 0.15 },
        },
        exit: { opacity: 0, transition: { duration: 0.25 } },
    };

    const linkVariant = {
        hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
        visible: {
            opacity: 1, y: 0, filter: 'blur(0px)',
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        },
        exit: { opacity: 0, y: -15, transition: { duration: 0.2 } },
    };

    return (
        <>
            {/* ─── Floating Pill Navbar ─── */}
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-4 px-4"
            >
                <nav
                    className={`
                        flex items-center justify-between gap-6
                        px-5 py-2.5 rounded-full
                        transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                        ${scrolled
                            ? 'bg-canvas/80 backdrop-blur-2xl border border-border shadow-elevated w-full max-w-3xl'
                            : 'bg-transparent w-full max-w-4xl'
                        }
                    `}
                >
                    {/* Logo */}
                    <a href="#hero" className="flex items-center gap-1 shrink-0">
                        <span className="text-lg font-black tracking-tight">
                            <span className="text-accent">B</span>
                            <span className="text-ink">efore</span>
                            <span className="text-ink-muted mx-0.5">/</span>
                            <span className="text-ink/70">It</span>
                            <span className="text-primary-light ml-0.5">Strikes</span>
                        </span>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <MagneticLink key={link.href} href={link.href}>
                                {link.label}
                            </MagneticLink>
                        ))}
                    </div>

                    {/* CTA + Hamburger */}
                    <div className="flex items-center gap-3">
                        <motion.a
                            href="#register"
                            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 bg-accent text-canvas text-sm font-bold rounded-full"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            Đăng Ký
                        </motion.a>

                        {/* Hamburger on mobile */}
                        <motion.button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-surface-raised/50 border border-border text-ink"
                            whileTap={{ scale: 0.92 }}
                            aria-label="Toggle menu"
                        >
                            <AnimatePresence mode="wait">
                                {mobileOpen ? (
                                    <motion.span
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <X weight="bold" className="w-5 h-5" />
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="open"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <List weight="bold" className="w-5 h-5" />
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </nav>
            </motion.header>

            {/* ─── Mobile Fullscreen Overlay ─── */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 bg-canvas/95 backdrop-blur-3xl flex flex-col items-center justify-center"
                    >
                        {/* Close Button */}
                        <motion.button
                            onClick={() => setMobileOpen(false)}
                            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full border border-border text-ink"
                            whileTap={{ scale: 0.9 }}
                        >
                            <X weight="bold" className="w-6 h-6" />
                        </motion.button>

                        {/* Links */}
                        <motion.nav
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="flex flex-col items-center gap-6"
                        >
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    variants={linkVariant}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-3xl font-black tracking-tight text-ink hover:text-accent transition-colors"
                                >
                                    {link.label}
                                </motion.a>
                            ))}

                            <motion.a
                                href="#register"
                                variants={linkVariant}
                                onClick={() => setMobileOpen(false)}
                                className="mt-4 px-8 py-3 bg-accent text-canvas font-bold text-lg rounded-full"
                            >
                                Đăng Ký Thi Đấu
                            </motion.a>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
