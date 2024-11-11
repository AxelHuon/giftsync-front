import { Button } from '@/components/atoms/Buttons/ClassicButton/Button';
import { useSettings } from '@/providers/SettingsProvider';
import { ArrowRight } from 'lucide-react';
import React from 'react';

const ArrowButtonToggleSideBar: React.FC = () => {
  const { sideBarIsOpen, toggleSideBar } = useSettings();
  return (
    <Button
      className={
        'w-fit absolute bg-neutral-25 right-[-20px] top-1/2 p-2 rounded-2xl '
      }
      variant={'outline'}
      onClick={() => toggleSideBar()}
    >
      <ArrowRight
        className={`${
          sideBarIsOpen ? 'rotate-180' : ''
        } transition-property:rotate duration-200 ease-in-out`}
      />
    </Button>
  );
};

export default ArrowButtonToggleSideBar;
