"use client";
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import {
    Trophy,
    CheckCircle,
    ArrowRight,
    User,
    Phone,
    Envelope,
} from '@phosphor-icons/react';

export default function RegistrationForm() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const [form, setForm] = useState({
        player1: '',
        player2: '',
        phone: '',
        email: '',
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const errs = {};
        if (!form.player1.trim()) errs.player1 = 'Vui lòng nhập họ tên người 1';
        if (!form.player2.trim()) errs.player2 = 'Vui lòng nhập họ tên người 2';
        if (!form.phone.trim()) {
            errs.phone = 'Vui lòng nhập số điện thoại';
        } else if (!/^(0[3-9])\d{8}$/.test(form.phone.trim())) {
            errs.phone = 'Số điện thoại không hợp lệ';
        }
        if (!form.email.trim()) {
            errs.email = 'Vui lòng nhập email';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
            errs.email = 'Email không hợp lệ';
        }
        return errs;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        setErrors(errs);

        if (Object.keys(errs).length === 0) {
            const existing = JSON.parse(localStorage.getItem('bis_registrations') || '[]');
            existing.push({ ...form, timestamp: new Date().toISOString() });
            localStorage.setItem('bis_registrations', JSON.stringify(existing));

            setSubmitted(true);
            toast.success('Đăng ký thành công! Chúng tôi sẽ liên hệ bạn sớm.', {
                duration: 5000,
                style: {
                    background: '#101828',
                    color: '#F0F4FF',
                    border: '1px solid rgba(25, 57, 212, 0.3)',
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 600,
                },
                iconTheme: {
                    primary: '#C8E60E',
                    secondary: '#0A0F1A',
                },
            });
        }
    };

    const handleChange = (field) => (e) => {
        setForm((prev) => ({ ...prev, [field]: e.target.value }));
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: '' }));
        }
    };

    const inputClasses = (field) =>
        `input-field ${errors[field] ? 'error' : ''}`;

    return (
        <section id="register" className="relative section-padding overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-canvas via-surface/30 to-canvas" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/6 rounded-full" style={{ filter: 'blur(100px)' }} />

            <div ref={ref} className="relative z-10 max-w-2xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="pill-badge bg-accent/10 border border-accent/20 text-accent mb-6 mx-auto"
                    >
                        <Trophy weight="duotone" className="w-3.5 h-3.5" />
                        <span>Đăng Ký</span>
                    </motion.div>

                    <h2 className="heading-section text-ink mb-4">
                        Đăng Ký{' '}
                        <span className="text-gradient-brand">Thi Đấu</span>
                    </h2>
                    <p className="text-body text-lg mx-auto text-center">
                        Điền thông tin đội của bạn để tham gia Giải Cầu Lông Cộng Đồng
                    </p>
                </motion.div>

                {submitted ? (
                    /* ─── Success State ─── */
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center p-12 rounded-2xl bg-surface/80 border border-accent/20"
                    >
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                            <CheckCircle weight="fill" className="w-8 h-8 text-accent" />
                        </div>
                        <h3 className="text-2xl font-black text-accent mb-3">
                            Đăng Ký Thành Công
                        </h3>
                        <p className="text-ink-secondary mb-8">
                            Cảm ơn bạn đã đăng ký. Chúng tôi sẽ liên hệ qua email hoặc điện thoại để xác nhận.
                        </p>
                        <motion.button
                            onClick={() => {
                                setSubmitted(false);
                                setForm({ player1: '', player2: '', phone: '', email: '' });
                            }}
                            className="btn-outline"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Đăng ký thêm đội khác
                        </motion.button>
                    </motion.div>
                ) : (
                    /* ─── Form ─── */
                    <motion.form
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        onSubmit={handleSubmit}
                        className="double-bezel"
                    >
                        <div className="bezel-inner p-7 md:p-10 space-y-5">
                            <div className="grid sm:grid-cols-2 gap-5">
                                {/* Player 1 */}
                                <div>
                                    <label className="block text-sm font-bold text-ink-secondary mb-2">
                                        Họ Tên Người 1 <span className="text-accent">*</span>
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-ink-muted" />
                                        <input
                                            type="text"
                                            placeholder="Nguyễn Văn A"
                                            value={form.player1}
                                            onChange={handleChange('player1')}
                                            className={`${inputClasses('player1')} pl-11`}
                                        />
                                    </div>
                                    {errors.player1 && (
                                        <p className="text-error text-xs mt-1.5 font-medium">{errors.player1}</p>
                                    )}
                                </div>

                                {/* Player 2 */}
                                <div>
                                    <label className="block text-sm font-bold text-ink-secondary mb-2">
                                        Họ Tên Người 2 <span className="text-accent">*</span>
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-ink-muted" />
                                        <input
                                            type="text"
                                            placeholder="Trần Thị B"
                                            value={form.player2}
                                            onChange={handleChange('player2')}
                                            className={`${inputClasses('player2')} pl-11`}
                                        />
                                    </div>
                                    {errors.player2 && (
                                        <p className="text-error text-xs mt-1.5 font-medium">{errors.player2}</p>
                                    )}
                                </div>
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-sm font-bold text-ink-secondary mb-2">
                                    Số Điện Thoại <span className="text-accent">*</span>
                                </label>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-ink-muted" />
                                    <input
                                        type="tel"
                                        placeholder="0904 011 106"
                                        value={form.phone}
                                        onChange={handleChange('phone')}
                                        className={`${inputClasses('phone')} pl-11`}
                                    />
                                </div>
                                {errors.phone && (
                                    <p className="text-error text-xs mt-1.5 font-medium">{errors.phone}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-bold text-ink-secondary mb-2">
                                    Email <span className="text-accent">*</span>
                                </label>
                                <div className="relative">
                                    <Envelope className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-ink-muted" />
                                    <input
                                        type="email"
                                        placeholder="example@email.com"
                                        value={form.email}
                                        onChange={handleChange('email')}
                                        className={`${inputClasses('email')} pl-11`}
                                    />
                                </div>
                                {errors.email && (
                                    <p className="text-error text-xs mt-1.5 font-medium">{errors.email}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.97 }}
                                className="group w-full btn-primary justify-center text-base mt-4 py-4"
                            >
                                <Trophy weight="fill" className="w-5 h-5" />
                                <span>Đăng Ký Thi Đấu Ngay</span>
                                <motion.span
                                    animate={{ x: [0, 4, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <ArrowRight weight="bold" className="w-5 h-5" />
                                </motion.span>
                            </motion.button>
                        </div>
                    </motion.form>
                )}
            </div>
        </section>
    );
}
