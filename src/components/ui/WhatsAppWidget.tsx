import { motion } from 'framer-motion';


export function WhatsAppWidget() {
  const phoneNumber = "18005553145"; // From parsed contact phone number
  const message = encodeURIComponent("Hello Nexamentes! I would like to inquire about your staffing and technology solutions.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring' }}
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 cursor-pointer"
    >


      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-success hover:opacity-90 rounded-full flex items-center justify-center text-primary-contrast shadow-lg hover:scale-105 transition-all duration-300 relative border border-success/20"
        aria-label="Contact Nexamentes via WhatsApp"
      >
        {/* Pulsing ring background */}
        <span className="absolute inset-0 rounded-full bg-success animate-ping opacity-35 group-hover:opacity-50 pointer-events-none" />

        {/* WhatsApp SVG Icon */}
        <svg
          className="w-6 h-6 relative z-10 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.503-5.714-1.458L0 24zm6.59-4.846c1.6.95 3.18 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.623-1.023-5.086-2.885-6.948C16.59 2.016 14.12 1.01 11.516 1.01c-5.44 0-9.866 4.372-9.87 9.802 0 1.688.45 3.328 1.3 4.766l-.998 3.648 3.79-.972zm11.378-5.395c-.302-.15-1.785-.87-2.062-.97-.278-.1-.48-.15-.68.15-.2.3-.778.97-.954 1.17-.176.2-.351.224-.653.075-.302-.15-1.273-.464-2.427-1.48-.897-.793-1.502-1.771-1.678-2.07-.176-.3-.019-.462.131-.611.135-.134.302-.35.453-.524.151-.174.2-.3.302-.5.101-.2.05-.375-.025-.524-.075-.15-.68-1.62-.931-2.228-.246-.59-.496-.51-.68-.52-.176-.01-.378-.01-.58-.01-.2 0-.526.075-.801.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.22 5.116 4.516.715.309 1.273.493 1.708.63.719.228 1.373.195 1.89.119.577-.085 1.785-.724 2.037-1.424.252-.7.252-1.3.176-1.424-.075-.125-.277-.2-0.58-.35z" />
        </svg>
      </a>
    </motion.div>
  );
}

export default WhatsAppWidget;
