import { useState } from 'react';

export function usePersonalData() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);

  async function submitPersonalData(personalData) {
    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch('/api/personal-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(personalData),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'No se pudieron enviar los datos.');
      }

      setFeedback({ type: 'success', message: result.message });
    } catch (error) {
      setFeedback({
        type: 'error',
        message:
          error instanceof TypeError
            ? 'No se pudo conectar con el servidor.'
            : error.message,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return { feedback, isSubmitting, submitPersonalData };
}
