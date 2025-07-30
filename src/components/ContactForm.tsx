
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Mail, Send } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    try {
      // Create mailto link with form data
      const mailtoLink = `mailto:Neocrebhub@gmail.com?subject=${encodeURIComponent(
        `Contact Form: ${values.subject}`
      )}&body=${encodeURIComponent(
        `Name: ${values.name}\n\nMessage:\n${values.message}`
      )}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      toast({
        title: "Email client opened",
        description: "Your default email client should open with the message pre-filled.",
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error opening your email client. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <Mail className="text-purple-400 mx-auto mb-4" size={48} />
        <h3 className="text-2xl font-semibold text-white mb-2">Get In Touch</h3>
        <p className="text-slate-300">
          Want to collaborate, request a project, or invite me for a build? Send me a message!
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-300">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your full name"
                    className="bg-slate-800/50 border-purple-500/20 text-white placeholder:text-slate-400 focus:border-purple-400"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-300">Subject</FormLabel>
                <FormControl>
                  <Input
                    placeholder="What's this about?"
                    className="bg-slate-800/50 border-purple-500/20 text-white placeholder:text-slate-400 focus:border-purple-400"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-300">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell me about your project or collaboration idea..."
                    className="bg-slate-800/50 border-purple-500/20 text-white placeholder:text-slate-400 focus:border-purple-400 min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 text-lg"
            disabled={form.formState.isSubmitting}
          >
            <Send size={20} className="mr-2" />
            {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
