



const Label = (({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={ className}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }