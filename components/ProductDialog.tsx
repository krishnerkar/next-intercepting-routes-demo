"use client";

import * as React from "react";
import * as ProductDialogPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "@/lib/utils";

const ProductDialog = ProductDialogPrimitive.Root;

const ProductDialogTrigger = ProductDialogPrimitive.Trigger;

const ProductDialogPortal = ({
  className,
  children,
  ...props
}: ProductDialogPrimitive.AlertDialogPortalProps) => (
  <ProductDialogPrimitive.Portal className={cn(className)} {...props}>
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      {children}
    </div>
  </ProductDialogPrimitive.Portal>
);
ProductDialogPortal.displayName = ProductDialogPrimitive.Portal.displayName;

const ProductDialogOverlay = React.forwardRef<
  React.ElementRef<typeof ProductDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof ProductDialogPrimitive.Overlay>
>(({ className, children, ...props }, ref) => (
  <ProductDialogPrimitive.Overlay
    className={cn(
      "animate-in fade-in fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity",
      className
    )}
    {...props}
    ref={ref}
  />
));
ProductDialogOverlay.displayName = ProductDialogPrimitive.Overlay.displayName;

const ProductDialogContent = React.forwardRef<
  React.ElementRef<typeof ProductDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ProductDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ProductDialogPortal>
    <ProductDialogOverlay />
    <ProductDialogPrimitive.Content
      ref={ref}
      className={cn(
        "animate-in fade-in-90 slide-in-from-bottom-10 sm:zoom-in-90 sm:slide-in-from-bottom-0 fixed z-50 grid w-full max-w-4xl scale-100 gap-4 bg-white p-6 opacity-100 sm:rounded-lg md:w-full",
        "dark:bg-slate-900",
        className
      )}
      {...props}
    />
  </ProductDialogPortal>
));
ProductDialogContent.displayName = ProductDialogPrimitive.Content.displayName;

const ProductDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-left",
      className
    )}
    {...props}
  />
);
ProductDialogHeader.displayName = "ProductDialogHeader";

const ProductDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
ProductDialogFooter.displayName = "ProductDialogFooter";

const ProductDialogTitle = React.forwardRef<
  React.ElementRef<typeof ProductDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof ProductDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <ProductDialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold text-slate-900",
      "dark:text-slate-50",
      className
    )}
    {...props}
  />
));
ProductDialogTitle.displayName = ProductDialogPrimitive.Title.displayName;

const ProductDialogDescription = React.forwardRef<
  React.ElementRef<typeof ProductDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof ProductDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <ProductDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-slate-500", "dark:text-slate-400", className)}
    {...props}
  />
));
ProductDialogDescription.displayName =
  ProductDialogPrimitive.Description.displayName;

const ProductDialogAction = React.forwardRef<
  React.ElementRef<typeof ProductDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof ProductDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <ProductDialogPrimitive.Action
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-slate-900 py-2 px-4 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900",
      className
    )}
    {...props}
  />
));
ProductDialogAction.displayName = ProductDialogPrimitive.Action.displayName;

const ProductDialogCancel = React.forwardRef<
  React.ElementRef<typeof ProductDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof ProductDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <ProductDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md  border-slate-200 bg-transparent py-2 px-4 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-700 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 sm:mt-0",
      className
    )}
    {...props}
  />
));
ProductDialogCancel.displayName = ProductDialogPrimitive.Cancel.displayName;

export {
  ProductDialog,
  ProductDialogTrigger,
  ProductDialogContent,
  ProductDialogHeader,
  ProductDialogFooter,
  ProductDialogTitle,
  ProductDialogDescription,
  ProductDialogAction,
  ProductDialogCancel,
};
