import { z } from 'zod';

export const leadSchema = z.object({
  name: z
    .string()
    .min(2, 'Nama lengkap wajib diisi (minimal 2 karakter)')
    .max(80, 'Nama terlalu panjang (maksimal 80 karakter)'),
  phone: z
    .string()
    .min(8, 'Nomor WhatsApp/telepon wajib diisi')
    .max(20, 'Nomor telepon tidak valid')
    .regex(/^[0-9+\-\s]+$/, 'Nomor telepon hanya boleh berisi angka'),
  email: z
    .string()
    .max(80, 'Email terlalu panjang')
    .email('Format email tidak valid')
    .optional()
    .or(z.literal('')),
  service: z.string().min(1, 'Pilih jenis layanan terlebih dahulu'),
  message: z
    .string()
    .max(1000, 'Pesan terlalu panjang (maksimal 1000 karakter)')
    .optional()
    .or(z.literal('')),
  privacy: z.boolean().refine((v) => v === true, {
    message: 'Anda harus menyetujui kebijakan privasi',
  }),
});

export type LeadInput = z.infer<typeof leadSchema>;
