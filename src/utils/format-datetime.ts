import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDateTime(rawDate: string): string {
   const date = new Date(rawDate);

   return format(date, "dd/MM/yyyy 'as' HH'h'mm", {
      locale: ptBR,
   });
}

export function formatRelativeDate(rawDate: string): string {
   const date = new Date(rawDate);

   return formatDistanceToNow(date, {
      locale: ptBR,
      addSuffix: true,
   });
}
// console.log(new Date().toISOString());
const rawDate = "2026-08-06T17:56:48.779Z";
console.log(rawDate);
console.log(formatRelativeDate(rawDate));
