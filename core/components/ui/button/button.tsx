import { Slot } from '@radix-ui/react-slot';
import { Loader2 as Spinner } from 'lucide-react';
import { ComponentPropsWithRef, ComponentRef, forwardRef } from 'react';

import { cn } from '~/lib/utils';

interface Props extends ComponentPropsWithRef<'button'> {
  asChild?: boolean;
  loading?: boolean;
  loadingText?: string;
  variant?: 'primary' | 'secondary' | 'subtle';
}

const Button = forwardRef<ComponentRef<'button'>, Props>(
  (
    {
      asChild = false,
      children,
      className,
      variant = 'primary',
      loading,
      loadingText,
      disabled,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(
          'relative flex w-full items-center justify-center border-2 border-primary px-[30px] py-2.5 text-base font-semibold leading-6 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 disabled:border-gray-400',
          variant === 'primary' &&
            'hover:border-secondary hover:bg-secondary bg-primary text-white disabled:bg-gray-400 disabled:hover:border-gray-400 disabled:hover:bg-gray-400',
          variant === 'secondary' &&
            'hover:border-secondary hover:bg-secondary hover:text-secondary bg-transparent text-primary hover:bg-opacity-10 disabled:text-gray-400 disabled:hover:border-gray-400 disabled:hover:bg-transparent disabled:hover:text-gray-400',
          variant === 'subtle' &&
            'hover:bg-secondary hover:text-secondary border-none bg-transparent text-primary hover:bg-opacity-10 disabled:text-gray-400 disabled:hover:bg-transparent disabled:hover:text-gray-400',
          className,
        )}
        disabled={disabled || loading}
        ref={ref}
        {...props}
      >
        {loading ? (
          <>
            <span className="absolute z-10 flex h-full w-full items-center justify-center">
              <Spinner aria-hidden="true" className="animate-spin" />
              <span className="sr-only">{loadingText}</span>
            </span>
            <span className="invisible flex items-center">{children}</span>
          </>
        ) : (
          children
        )}
      </Comp>
    );
  },
);

Button.displayName = 'Button';

export { Button };
