import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Mail, Lock, User, ArrowRight, ShieldCheck, Loader2, Eye, EyeOff, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Auth = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [mode, setMode] = useState('login'); // 'login' | 'signup'
    const [isAdminMode, setIsAdminMode] = useState(false);
    
    const [form, setForm] = useState({ email: '', password: '', fullName: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        const adminParam = searchParams.get('admin');
        const modeParam = searchParams.get('mode');

        if (adminParam === 'true') {
            setIsAdminMode(true);
            setMode('login');
        } else if (modeParam === 'signup') {
            setMode('signup');
            setIsAdminMode(false);
        } else {
            setMode('login');
            setIsAdminMode(false);
        }
    }, [searchParams]);

    async function handleSubmit(e) {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            if (mode === 'signup') {
                const { data, error: signUpError } = await supabase.auth.signUp({
                    email: form.email,
                    password: form.password,
                    options: { data: { full_name: form.fullName } }
                });
                if (signUpError) throw signUpError;
                alert('Success! Please check your email for verification.');
            } else {
                const { data, error: signInError } = await supabase.auth.signInWithPassword({
                    email: form.email,
                    password: form.password
                });
                if (signInError) throw signInError;

                if (isAdminMode) {
                    const { data: adminUser } = await supabase
                        .from('admin_users')
                        .select('role')
                        .eq('id', data.user.id)
                        .single();

                    if (!adminUser) {
                        await supabase.auth.signOut();
                        throw new Error('Unauthorized: You do not have admin access.');
                    }
                    navigate('/admin');
                } else {
                    navigate('/');
                }
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-[#050b18] flex items-center justify-center p-6 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 z-0">
                <motion.div 
                    animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                        x: [0, 50, 0],
                        y: [0, -50, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-cyan-600/20 rounded-full blur-[120px]" 
                />
                <motion.div 
                    animate={{ 
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.15, 0.1],
                        x: [0, -50, 0],
                        y: [0, 50, 0]
                    }}
                    transition={{ duration: 12, repeat: Infinity }}
                    className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-600/20 rounded-full blur-[120px]" 
                />
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md relative z-10"
            >
                {/* Brand Identity */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/5 mb-8"
                        style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 70%, 85% 100%, 0 100%, 0% 30%)' }}
                    >
                        <Sparkles className="w-3 h-3 text-cyan-400" />
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">The Cryos Protocol</span>
                    </motion.div>
                    <h1 className="text-6xl md:text-7xl font-display text-white leading-[0.8] mb-4 uppercase italic">
                        {isAdminMode ? 'SYSTEM' : 'IDENTITY'}.
                    </h1>
                    <p className="text-slate-500 font-bold tracking-[0.4em] text-[10px] uppercase italic">
                        {isAdminMode ? 'Encrypted Administrator Terminal' : 'Access Your Digital Archive'}
                    </p>
                </div>

                {/* Auth Interface */}
                <div className={`glass-card p-10 border transition-all duration-700 shadow-2xl overflow-hidden relative ${isAdminMode ? 'border-red-500/30' : 'border-white/5'}`}
                    style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 90%, 95% 100%, 0 100%, 0% 10%)' }}
                >
                    {isAdminMode && (
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
                    )}

                    <div className="flex bg-white/5 p-1.5 mb-10 border border-white/5"
                         style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 80%, 95% 100%, 0 100%, 0% 20%)' }}
                    >
                        <button 
                            onClick={() => { setMode('login'); setIsAdminMode(false); }}
                            className={`flex-1 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${mode === 'login' && !isAdminMode ? 'bg-white text-black shadow-[0_10px_20px_rgba(255,255,255,0.1)]' : 'text-slate-500 hover:text-white'}`}
                            style={mode === 'login' && !isAdminMode ? { clipPath: 'polygon(5% 0, 100% 0, 100% 80%, 95% 100%, 0 100%, 0% 20%)' } : {}}
                        >
                            Log In
                        </button>
                        <button 
                            onClick={() => { setMode('signup'); setIsAdminMode(false); }}
                            className={`flex-1 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${mode === 'signup' ? 'bg-white text-black shadow-[0_10px_20px_rgba(255,255,255,0.1)]' : 'text-slate-500 hover:text-white'}`}
                            style={mode === 'signup' ? { clipPath: 'polygon(5% 0, 100% 0, 100% 80%, 95% 100%, 0 100%, 0% 20%)' } : {}}
                        >
                            Sign Up
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <AnimatePresence mode="wait">
                            {mode === 'signup' && (
                                <motion.div 
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="space-y-2 overflow-hidden"
                                >
                                    <label className="text-[10px] font-bold text-slate-600 uppercase tracking-widest ml-1">Architect Name</label>
                                    <div className="relative group">
                                        <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 group-focus-within:text-cyan-400 transition-colors" />
                                        <input 
                                            type="text" 
                                            placeholder="FULL PROTOCOL NAME"
                                            required={mode === 'signup'}
                                            value={form.fullName}
                                            onChange={e => setForm({...form, fullName: e.target.value})}
                                            className="w-full bg-white/5 border border-white/5 py-5 pl-14 pr-5 text-white text-[10px] font-bold tracking-widest outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all placeholder:text-slate-700"
                                            style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 70%, 95% 100%, 0 100%, 0% 30%)' }}
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-600 uppercase tracking-widest ml-1">Universal ID</label>
                            <div className="relative group">
                                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 group-focus-within:text-cyan-400 transition-colors" />
                                <input 
                                    type="email" 
                                    placeholder="IDENTITY@CRYOS.COM"
                                    required
                                    value={form.email}
                                    onChange={e => setForm({...form, email: e.target.value})}
                                    className="w-full bg-white/5 border border-white/5 py-5 pl-14 pr-5 text-white text-[10px] font-bold tracking-widest outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all placeholder:text-slate-700"
                                    style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 70%, 95% 100%, 0 100%, 0% 30%)' }}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-600 uppercase tracking-widest ml-1">Cipher Key</label>
                            <div className="relative group">
                                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 group-focus-within:text-cyan-400 transition-colors" />
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    placeholder="••••••••"
                                    required
                                    value={form.password}
                                    onChange={e => setForm({...form, password: e.target.value})}
                                    className="w-full bg-white/5 border border-white/5 py-5 pl-14 pr-14 text-white text-sm outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all placeholder:text-slate-700 font-mono"
                                    style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 70%, 95% 100%, 0 100%, 0% 30%)' }}
                                />
                                <button 
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-600 hover:text-cyan-400 transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        {error && (
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-red-500/10 border border-red-500/20 text-red-500 text-[9px] font-bold uppercase tracking-widest py-4 px-5 flex items-center gap-3"
                                style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 80%, 95% 100%, 0 100%, 0% 20%)' }}
                            >
                                <span className="w-5 h-5 bg-red-500/20 flex items-center justify-center text-[10px]">!</span>
                                {error}
                            </motion.div>
                        )}

                        <button 
                            type="submit" 
                            disabled={loading}
                            className="w-full h-20 bg-cyan-600 text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-cyan-500 transition-all duration-500 flex items-center justify-center gap-4 group disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_20px_40px_rgba(6,182,212,0.2)]"
                            style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 80%, 95% 100%, 0 100%, 0% 20%)' }}
                        >
                            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                                <>
                                    {mode === 'login' ? 'Execute Sync Protocol' : 'Initiate New Chassis'}
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-12 pt-8 border-t border-white/5 flex flex-col items-center gap-6">
                        <button 
                            onClick={() => { setIsAdminMode(!isAdminMode); setMode('login'); }}
                            className="text-[10px] font-bold text-slate-600 hover:text-cyan-400 transition-all flex items-center gap-3 group/admin uppercase tracking-[0.2em]"
                        >
                            {isAdminMode ? <User className="w-4 h-4 text-cyan-400" /> : <ShieldCheck className="w-4 h-4 group-hover/admin:text-red-500 transition-colors" />}
                            {isAdminMode ? 'RETURN TO STANDARD INTERFACE' : 'ENTER RESTRICTED ADMIN ZONE'}
                        </button>
                    </div>
                </div>

                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-12 text-[10px] text-slate-700 font-bold uppercase tracking-[0.4em] italic"
                >
                    Secured by Cryos-Stride Encryption // SECTOR 04
                </motion.p>
            </motion.div>
        </div>

    );
};

export default Auth;

