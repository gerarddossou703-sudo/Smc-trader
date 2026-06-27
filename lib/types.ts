export type Formation = {
  id: string;
  type: "video" | "book";
  title: string;
  subtitle: string | null;
  price: number;
  duration: string | null;
  pages: string | null;
  lessons: string | null;
  level: string | null;
  description: string | null;
  video_url: string | null;
};

export type FreeCourse = {
  id: string;
  title: string;
  duration: string | null;
  icon: string;
  content: string[];
  display_order: number;
};

export type QuizQuestion = {
  id: string;
  course_id: string;
  question: string;
  options: string[];
  correct_index: number;
  display_order: number;
};

export type Purchase = {
  id: string;
  user_id: string;
  formation_id: string;
  status: "en_attente" | "confirme" | "refuse";
  payment_method: string;
  proof_reference: string;
  created_at: string;
  confirmed_at: string | null;
  formations?: Formation;
  profiles?: { name: string; email: string };
};

export type Profile = {
  id: string;
  name: string;
  email: string;
  is_admin: boolean;
};

export const PAYMENT_METHODS = [
  {
    id: "crypto",
    label: "Crypto (USDT / BTC)",
    detail: "Adresse USDT (TRC20) : TQn9Y2khEsLJW1ChVWFMSMeRDow5KcbLSE",
    note: "Réseau TRC20 uniquement. Toute autre chaîne = fonds perdus.",
  },
  {
    id: "mtn",
    label: "MTN Money",
    detail: "+229 XX XX XX XX — Nom : Gérard M. DOSSOU",
    note: "Indique ta référence formation en motif de transfert.",
  },
  {
    id: "moov",
    label: "Moov Money",
    detail: "+229 XX XX XX XX — Nom : Gérard M. DOSSOU",
    note: "Indique ta référence formation en motif de transfert.",
  },
];

export function fmtCFA(n: number) {
  return n.toLocaleString("fr-FR") + " F CFA";
  }
