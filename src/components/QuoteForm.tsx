import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const services = [
  "Garage Door Services",
  "Media Wall Designs",
  "Kitchen Renovation",
  "Accent Walls",
  "Flooring & Carpet Removal",
  "In-House Painting",
  "Other",
];

interface QuoteFormProps {
  submitLabel?: string;
  darkMode?: boolean;
}

const QuoteForm = ({ submitLabel = "Request a Quote", darkMode = false }: QuoteFormProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    service: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_mczon4u",
        "template_oen7jhq",
        {
          name: form.name,
          phone: form.phone,
          city: form.city,
          service: form.service,
          message: form.message,
        }
      );
      toast({
        title: "Your request has been sent!",
        description: "We'll be in touch soon.",
      });
      setForm({ name: "", phone: "", city: "", service: "", message: "" });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please call us at 945-344-4580.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClasses = darkMode
    ? "bg-secondary-foreground/5 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50"
    : "";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        placeholder="Full Name"
        value={form.name}
        onChange={(e) => handleChange("name", e.target.value)}
        required
        className={inputClasses}
      />
      <Input
        placeholder="Contact Number"
        type="tel"
        value={form.phone}
        onChange={(e) => handleChange("phone", e.target.value)}
        required
        className={inputClasses}
      />
      <Input
        placeholder="City"
        value={form.city}
        onChange={(e) => handleChange("city", e.target.value)}
        required
        className={inputClasses}
      />
      <Select
        value={form.service}
        onValueChange={(val) => handleChange("service", val)}
      >
        <SelectTrigger className={inputClasses}>
          <SelectValue placeholder="Service Needed" />
        </SelectTrigger>
        <SelectContent>
          {services.map((s) => (
            <SelectItem key={s} value={s}>
              {s}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Textarea
        placeholder="Additional Info"
        value={form.message}
        onChange={(e) => handleChange("message", e.target.value)}
        rows={4}
        className={inputClasses}
      />
      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-primary font-heading text-sm uppercase tracking-widest text-primary-foreground hover:bg-primary/90"
      >
        {loading ? "Sending..." : submitLabel}
      </Button>
    </form>
  );
};

export default QuoteForm;
