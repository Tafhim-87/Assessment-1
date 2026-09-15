'use client';

import { useCallback, useMemo, useState } from 'react';
import type { WorkbenchTicket } from '@/lib/types';
import { INITIAL_TICKETS } from '@/lib/constants';

/**
 * Encapsulates the "New Device Intake" simulation.
 * Keeping this logic out of the component makes it
 * easy to swap for a real API call later.
 */
export function useWorkbench() {
  const [tickets, setTickets] = useState<WorkbenchTicket[]>(INITIAL_TICKETS);

  const addTicket = useCallback(() => {
    setTickets((prev) => {
      // Generate next sequential FX id
      const nextNum =
        Math.max(
          ...prev.map((t) => Number(t.id.replace(/[^0-9]/g, ''))),
        ) + 1;

      const newTicket: WorkbenchTicket = {
        id: `#FX-${nextNum}`,
        device: 'OnePlus 11 5G',
        imei: 'IMEI: 869402...19',
        fault: 'Broken Back Glass & USB Port',
        technician: 'Kabir H.',
        bench: 'Bench 02',
        progress: 25,
        status: 'Just Received',
        amount: 3200,
      };

      return [newTicket, ...prev];
    });
  }, []);

  const activeCount = useMemo(
    () => 38 + (tickets.length - INITIAL_TICKETS.length),
    [tickets.length],
  );

  return { tickets, addTicket, activeCount };
}