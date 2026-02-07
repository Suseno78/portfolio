'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Translations } from '@/lib/translations';
import { Send, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactProps {
  t: Translations;
}

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function Contact({ t }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      // Check if EmailJS is configured
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        // Fallback to API route if EmailJS not configured
        await sendViaAPI();
        return;
      }

      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Senz',
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error: any) {
      console.error('Email error:', error);

      let message = 'Failed to send message. Please try again or contact me directly.';
      if (error.text) {
        message = error.text;
      }

      setErrorMessage(message);
      setStatus('error');

      // Reset error message after 8 seconds
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 8000);
    }
  };

  const sendViaAPI = async () => {
    try {
      // Add timeout to prevent hanging on slow connections
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send email');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error: any) {
      console.error('API error:', error);

      let message = t.contact.error;
      if (error.name === 'AbortError') {
        message = 'Request timeout. Please check your connection and try again.';
      } else if (error.message) {
        message = error.message;
      }

      setErrorMessage(message);
      setStatus('error');

      // Reset error message after 8 seconds
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 8000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-neon-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          <span className="neon-text">{t.contact.title}</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          {/* Cyber glass form container */}
          <div className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200 dark:border-cyber-500/30 shadow-lg dark:shadow-cyber/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t.contact.namePlaceholder}
                  className="w-full px-6 py-4 bg-gray-50 dark:bg-dark-700/80 text-gray-900 dark:text-gray-100 rounded-xl border border-gray-300 dark:border-gray-600 focus:border-cyber-500 dark:focus:border-cyber-400 focus:ring-2 focus:ring-cyber-500/20 dark:focus:ring-cyber-400/30 outline-none transition-all duration-300 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                />
              </div>

              <div>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t.contact.emailPlaceholder}
                  className="w-full px-6 py-4 bg-gray-50 dark:bg-dark-700/80 text-gray-900 dark:text-gray-100 rounded-xl border border-gray-300 dark:border-gray-600 focus:border-cyber-500 dark:focus:border-cyber-400 focus:ring-2 focus:ring-cyber-500/20 dark:focus:ring-cyber-400/30 outline-none transition-all duration-300 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                />
              </div>

              <div>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.contact.messagePlaceholder}
                  rows={6}
                  className="w-full px-6 py-4 bg-gray-50 dark:bg-dark-700/80 text-gray-900 dark:text-gray-100 rounded-xl border border-gray-300 dark:border-gray-600 focus:border-cyber-500 dark:focus:border-cyber-400 focus:ring-2 focus:ring-cyber-500/20 dark:focus:ring-cyber-400/30 outline-none transition-all duration-300 resize-none placeholder:text-gray-400 dark:placeholder:text-gray-500"
                />
              </div>

              {/* Animated CTA button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-8 py-4 bg-gradient-to-r from-cyber-500 to-neon-500 hover:from-cyber-400 hover:to-neon-400 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold rounded-xl shadow-lg shadow-cyber-500/25 hover:shadow-xl hover:shadow-cyber-500/40 disabled:shadow-none transform hover:scale-[1.02] disabled:scale-100 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    {t.contact.sending}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    {t.contact.submit}
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Success Message */}
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-300 dark:border-emerald-500/50 rounded-xl flex items-center gap-3"
            >
              <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              <p className="text-emerald-700 dark:text-emerald-300 font-medium">
                {t.contact.success}
              </p>
            </motion.div>
          )}

          {/* Error Message */}
          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-rose-50 dark:bg-rose-900/20 border border-rose-300 dark:border-rose-500/50 rounded-xl flex items-start gap-3"
            >
              <XCircle className="w-6 h-6 text-rose-600 dark:text-rose-400 flex-shrink-0 mt-0.5" />
              <p className="text-rose-700 dark:text-rose-300 font-medium">
                {errorMessage || t.contact.error}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
