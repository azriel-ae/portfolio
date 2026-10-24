import { useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

interface CertModalProps {
  imgSrc: string | null;
  onClose: () => void;
}

export function CertModal({ imgSrc, onClose }: CertModalProps) {
  const { t } = useLanguage();
  const isOpen = imgSrc !== null;

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && isOpen) onClose();
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div
      className={`modal${isOpen ? ' open' : ''}`}
      id="certModal"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button type="button" className="modal-close" id="modalClose" aria-label={t('modal_close_label')} onClick={onClose}>
        &times;
      </button>
      <img src={imgSrc ?? ''} alt={t('modal_img_alt')} className="modal-img" id="modalImg" />
    </div>
  );
}
