import { useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

type SubCategory = {
  name: string;
  icon: React.ReactNode;
};

type Category = {
  name: string;
  icon: React.ReactNode;
  subcategories: SubCategory[];
};

type AccordionItemProps = {
  category: Category;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
};

// Variants
const chevronVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const contentVariants = {
  open: { height: 'auto', opacity: 1 },
  collapsed: { height: 0, opacity: 0 },
};

function AccordionItem({ category, index, isOpen, onToggle }: AccordionItemProps) {
  const id = useId();
  const buttonId = `accordion-button-${index}-${id}`;
  const contentId = `accordion-content-${index}-${id}`;

  return (
    <div className="text-sm border-b border-gray-200">
      <button
        id={buttonId}
        aria-controls={contentId}
        aria-expanded={isOpen}
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onToggle();
          }
        }}
        className="w-full flex items-center justify-between px-4 py-3 text-left text-gray-700 font-medium hover:bg-gray-100  transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200 cursor-pointer"
      >
        <span>{category.name}</span>

        <motion.span
          aria-hidden
          animate={isOpen ? 'open' : 'closed'}
          variants={chevronVariants}
          transition={{ duration: 0.18, ease: 'easeInOut' }}
          className="ml-2 flex items-center"
        >
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={contentId}
            role="region"
            aria-labelledby={buttonId}
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={contentVariants}
            transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
            className="px-4 overflow-hidden"
          >
            <ul className="pl-0 pb-3 pt-2 space-y-1">
              {category.subcategories.map((sub, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 cursor-pointer py-1 rounded-md"
                >
                  {sub.icon}
                  {sub.name}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AccordionItem;
