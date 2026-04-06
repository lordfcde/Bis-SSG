"use client";
import { motion } from 'framer-motion';
import {
    FacebookLogo,
    Phone,
    User,
    Building,
    MapPin,
    ArrowUpRight,
} from '@phosphor-icons/react';

const quickLinks = [
    { label: 'Trang Chủ', href: '#hero' },
    { label: 'Thực Trạng', href: '#reality' },
    { label: 'Trải Nghiệm', href: '#game' },
    { label: 'Giải Cầu Lông', href: '#badminton' },
    { label: 'Đăng Ký', href: '#register' },
];

const partners = ['FPT University', 'Lê Đức Sport'];

export default function Footer() {
    return (
        <footer className="relative py-16 md:py-20 border-t border-border">
            {/* Background */}
            <div className="absolute inset-0 bg-canvas" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(25,57,212,0.04),transparent_50%)]" />

            <div className="relative z-10 container-premium">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <h3 className="text-xl font-black mb-4">
                            <span className="text-accent">B</span>
                            <span className="text-ink">efore</span>
                            <span className="text-ink-muted mx-1">/</span>
                            <span className="text-ink/70">It</span>
                            <span className="text-primary-light ml-0.5">Strikes</span>
                        </h3>
                        <p className="text-ink-secondary text-sm leading-relaxed mb-6">
                            Sáng kiến phòng ngừa đột quỵ dẫn dắt bởi chuyên gia — kết nối cộng đồng qua
                            thể thao và kiến thức y tế.
                        </p>

                        {/* Social */}
                        <motion.a
                            href="https://www.facebook.com/profile.php?id=61587167315028"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-ink-muted hover:text-primary-light transition-colors text-sm group font-medium"
                            whileHover={{ x: 2 }}
                        >
                            <FacebookLogo weight="fill" className="w-5 h-5" />
                            <span>Facebook</span>
                            <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                        </motion.a>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-xs uppercase tracking-[0.15em] text-ink-muted mb-4">
                            Liên Kết
                        </h4>
                        <nav className="flex flex-col gap-2">
                            {quickLinks.map((link) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    className="text-ink-secondary hover:text-accent text-sm font-medium transition-colors inline-flex items-center gap-1"
                                    whileHover={{ x: 4 }}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </nav>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-xs uppercase tracking-[0.15em] text-ink-muted mb-4">
                            Liên Hệ
                        </h4>
                        <div className="space-y-3 text-sm">
                            <p className="flex items-center gap-2">
                                <Phone weight="duotone" className="w-4 h-4 text-primary-light" />
                                <span className="text-ink font-bold">0904 011 106</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <User weight="duotone" className="w-4 h-4 text-primary-light" />
                                <span className="text-ink font-bold">Ms. Hân — Project Leader</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <Building weight="duotone" className="w-4 h-4 text-primary-light" />
                                <span className="text-ink font-bold">FPT University</span>
                            </p>
                            <motion.a
                                href="https://maps.app.goo.gl/5SzScNYbcW71vXaE6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-2 text-ink-secondary hover:text-primary-light transition-colors group"
                                whileHover={{ x: 2 }}
                            >
                                <MapPin weight="duotone" className="w-4 h-4 text-primary-light mt-0.5" />
                                <span className="font-medium group-hover:text-primary-light transition-colors">
                                    306 Võ Văn Hát, Long Trường, Thủ Đức, TP.HCM
                                </span>
                            </motion.a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-ink-muted text-xs text-center sm:text-left font-medium">
                        2026 Before It Strikes. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        {partners.map((name) => (
                            <span key={name} className="text-ink-muted text-xs font-bold">
                                {name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
