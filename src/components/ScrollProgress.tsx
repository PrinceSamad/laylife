import { useScrollProgress } from '@/hooks/useScrollAnimation';

const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div className="scroll-progress">
      <div 
        className="scroll-progress-bar"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
};

export default ScrollProgress;
