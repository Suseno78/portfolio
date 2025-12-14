'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Translations } from '@/lib/translations';
import { Send, CheckCircle, XCircle } from 'lucide-react';

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
      console.error('Email error:', error);
      
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
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-50 via-accent-50 to-peach-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          {t.contact.title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={t.contact.namePlaceholder}
                className="w-full px-6 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl border-2 border-gray-200 dark:border-gray-700 focus:border-primary-500 dark:focus:border-primary-400 outline-none transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-500"
              />
            </div>

            <div>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={t.contact.emailPlaceholder}
                className="w-full px-6 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl border-2 border-gray-200 dark:border-gray-700 focus:border-primary-500 dark:focus:border-primary-400 outline-none transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-500"
              />
            </div>

            <div>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={t.contact.messagePlaceholder}
                rows={6}
                className="w-full px-6 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl border-2 border-gray-200 dark:border-gray-700 focus:border-primary-500 dark:focus:border-primary-400 outline-none transition-colors resize-none placeholder:text-gray-400 dark:placeholder:text-gray-500"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full px-8 py-4 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-300 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 disabled:scale-100 transition-all duration-300 flex items-center justify-center gap-2"
            >
              {status === 'sending' ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  {t.contact.sending}
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  {t.contact.submit}
                </>
              )}
            </button>
          </form>

          {/* Success Message */}
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-green-100 dark:bg-green-900/30 border-2 border-green-500 rounded-2xl flex items-center gap-3"
            >
              <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
              <p className="text-green-800 dark:text-green-200 font-medium">
                {t.contact.success}
              </p>
            </motion.div>
          )}

          {/* Error Message */}
          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-red-100 dark:bg-red-900/30 border-2 border-red-500 rounded-2xl flex items-start gap-3"
            >
              <XCircle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-red-800 dark:text-red-200 font-medium">
                {errorMessage || t.contact.error}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
