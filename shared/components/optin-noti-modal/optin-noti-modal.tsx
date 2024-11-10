import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { useSelector } from "@/store/store";
import { IEventForm } from "@/services/models/event-model";
import { Checkbox } from "@mui/joy";
import { useEffect, useState } from "react";

type PropT = {
  handleAction: Function;
  eventName: string;
  is_notification_enabled: boolean;
  setis_notification_enabled: Function;
};
export default function OptinNotiModal({
  eventName,
  handleAction,
  is_notification_enabled,
  setis_notification_enabled,
}: PropT) {
  const event = useSelector((state) => state.event);
  const tempEvent: IEventForm = event.data.tempEvent;
  const [isChecked, setisChecked] = useState(
    tempEvent.is_notification_enabled ?? true
  );

  useEffect(() => {
    console.log("===>", tempEvent.is_notification_enabled);
  }, []);

  return (
    <React.Fragment>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={true}
        onClose={() => {}}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <div className="px-4">
          <Sheet
            variant="outlined"
            sx={{ maxWidth: 500, borderRadius: "md", p: 3, boxShadow: "lg" }}
          >
            {/* <ModalClose variant="plain" sx={{ m: 1 }} /> */}
            <Typography
              component="h2"
              id="modal-title"
              level="h4"
              textColor="inherit"
              sx={{ fontWeight: "lg", mb: 1 }}
            >
              Notification Preference
            </Typography>
            <Typography id="modal-desc" textColor="text.tertiary">
              Get real-time SMS alerts for <b>{tempEvent.eventName}</b> (₦12 per
              SMS). Opt-in for updates on sales, and balances.
              <br />
              Would you like to enable SMS notifications?
            </Typography>
            <div className="mt-4">
              <div className="flex items-center gap-x-4">
                <input
                  type="checkbox"
                  checked={is_notification_enabled}
                  onChange={() => {
                    setis_notification_enabled(!is_notification_enabled);
                  }}
                />
                <label>Opt-in</label>
              </div>
            </div>

            <div className="flex items-center justify-end gap-x-4 mt-6">
              <button
                className="py-2 px-8 rounded-lg bg-partybank-red text-white"
                onClick={() => {
                  handleAction(isChecked);
                }}
              >
                Proceed
              </button>
            </div>
          </Sheet>
        </div>
      </Modal>
    </React.Fragment>
  );
}
