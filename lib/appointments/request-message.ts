import type { AppointmentRequestInput } from "@/lib/validation/appointment-request";

export function formatAppointmentRequestMessage(
  { fullName, preferredDate, preferredTime }: AppointmentRequestInput,
  branchName: string,
  treatmentName?: string,
) {
  const visit = treatmentName ? `an appointment for ${treatmentName}` : "an appointment";
  const date = preferredDate ? ` on ${preferredDate}` : "";
  const time = preferredTime ? ` at ${preferredTime}` : "";

  return `Hello ${branchName}. My name is ${fullName}. Is there availability for ${visit}${date}${time}?`;
}
