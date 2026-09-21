import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaCheckCircle,
  FaCopy,
  FaCheck,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { Bio } from "../../data/constants";

const Container = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 80px 24px 100px;

  @media (max-width: 960px) {
    padding: 60px 16px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 16px;
`;

const SectionBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 18px;
  border-radius: 999px;
  background: rgba(199, 44, 72, 0.12);
  border: 1px solid rgba(199, 44, 72, 0.35);
  color: ${({ theme }) => theme.secondary};
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 4px;
`;

const Title = styled(motion.h2)`
  font-size: 2.75rem;
  font-weight: 800;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;

  .gradient-text {
    background: linear-gradient(135deg, #ffffff 0%, #e8d5a3 60%, #c72c48 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Desc = styled(motion.p)`
  font-size: 1.05rem;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const ContactContent = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;
  max-width: 980px;
  align-items: flex-start;

  @media (max-width: 868px) {
    flex-direction: column;
    align-items: center;
  }
`;

const InfoBox = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: rgba(20, 17, 24, 0.8);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(199, 44, 72, 0.2);
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.6);
  width: 100%;

  @media (max-width: 480px) {
    padding: 24px 18px;
  }
`;

const InfoTitle = styled.h3`
  font-size: 1.35rem;
  font-weight: 700;
  color: ${({ theme }) => theme.secondary};
  margin: 0;
`;

const InfoText = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
  margin: 0;
`;

const InfoItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 6px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 14px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  transition: all 0.25s ease;

  &:hover {
    border-color: rgba(232, 213, 163, 0.35);
    background: rgba(199, 44, 72, 0.08);
  }

  .left-side {
    display: flex;
    align-items: center;
    gap: 12px;
    color: ${({ theme }) => theme.text_primary};
    font-size: 0.92rem;
    font-weight: 500;
    text-decoration: none;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .icon-wrap {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    background: rgba(199, 44, 72, 0.15);
    border: 1px solid rgba(199, 44, 72, 0.3);
    color: ${({ theme }) => theme.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
`;

const CopyBtn = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.secondary};
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(232, 213, 163, 0.15);
    color: #ffffff;
  }
`;

const ContactForm = styled(motion.form)`
  flex: 1.3;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(20, 17, 24, 0.85);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(199, 44, 72, 0.25);
  padding: 32px;
  border-radius: 20px;
  box-shadow: 0 15px 40px -10px rgba(0, 0, 0, 0.7);
  gap: 16px;

  @media (max-width: 480px) {
    padding: 24px 18px;
  }
`;

const FormTitle = styled.h3`
  font-size: 1.35rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 0 0 4px 0;
`;

const Input = styled.input`
  width: 100%;
  background: #110e14 !important;
  border: 1px solid rgba(255, 255, 255, 0.12);
  outline: none;
  font-size: 0.95rem;
  color: #f8f6f4 !important;
  border-radius: 12px;
  padding: 14px 16px;
  transition: all 0.25s ease;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    background: #151118 !important;
    box-shadow: 0 0 15px rgba(199, 44, 72, 0.25);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #110e14 inset !important;
    -webkit-text-fill-color: #f8f6f4 !important;
    caret-color: #ffffff;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  background: #110e14 !important;
  border: 1px solid rgba(255, 255, 255, 0.12);
  outline: none;
  font-size: 0.95rem;
  color: #f8f6f4 !important;
  border-radius: 12px;
  padding: 14px 16px;
  resize: vertical;
  transition: all 0.25s ease;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    background: #151118 !important;
    box-shadow: 0 0 15px rgba(199, 44, 72, 0.25);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #110e14 inset !important;
    -webkit-text-fill-color: #f8f6f4 !important;
    caret-color: #ffffff;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  width: 100%;

  @media (max-width: 580px) {
    flex-direction: column;
  }
`;

const SubmitButton = styled.button`
  flex: 1.2;
  min-width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: linear-gradient(135deg, #C72C48 0%, #8B1E3F 50%, #681228 100%);
  border: 1px solid rgba(232, 213, 163, 0.35);
  padding: 14px 20px;
  border-radius: 12px;
  color: #ffffff;
  font-size: 0.98rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(199, 44, 72, 0.4);
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(199, 44, 72, 0.6);
    border-color: ${({ theme }) => theme.secondary};
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;

const DirectMailLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 14px 16px;
  border-radius: 12px;
  color: ${({ theme }) => theme.secondary};
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;
  white-space: nowrap;

  &:hover {
    background: rgba(232, 213, 163, 0.12);
    border-color: ${({ theme }) => theme.secondary};
    color: #ffffff;
    transform: translateY(-2px);
  }
`;

const StatusMessage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 0.88rem;
  font-weight: 500;
  padding: 12px 16px;
  border-radius: 10px;
  line-height: 1.5;

  .status-header {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
  }

  &.success {
    background: rgba(16, 185, 129, 0.15);
    border: 1px solid rgba(16, 185, 129, 0.35);
    color: #34d399;
  }

  &.warning {
    background: rgba(245, 158, 11, 0.15);
    border: 1px solid rgba(245, 158, 11, 0.35);
    color: #fbbf24;
  }

  &.info {
    background: rgba(199, 44, 72, 0.15);
    border: 1px solid rgba(199, 44, 72, 0.3);
    color: #fca5a5;
  }
`;

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(Bio.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // 1. Direct realtime delivery via FormSubmit
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/darshanchavda1505@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            _subject: formData.subject || `New Portfolio Message from ${formData.name}`,
            message: formData.message,
          }),
        }
      );
      const resData = await response.json();
      if (resData.success === "true" || resData.success === true) {
        setLoading(false);
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        return;
      } else if (
        resData.message &&
        resData.message.toLowerCase().includes("activation")
      ) {
        setLoading(false);
        setStatus("activation_needed");
        return;
      }
    } catch (err) {
      console.log("FormSubmit attempt:", err);
    }

    // 2. EmailJS backup
    try {
      await emailjs.send(
        "service_plhn1am",
        "template_1ivvlkc",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Darshan Chavda",
          reply_to: formData.email,
        },
        "tG6Yt8aVNMZ9MiQAG"
      );
      setLoading(false);
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      return;
    } catch (err) {
      console.log("EmailJS attempt:", err);
    }

    // 3. Fallback to Gmail Web Compose
    setLoading(false);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      Bio.email
    )}&su=${encodeURIComponent(
      formData.subject || "Portfolio Contact Message"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.open(gmailUrl, "_blank");
    setStatus("direct_opened");
  };

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    Bio.email
  )}&su=${encodeURIComponent(
    formData.subject || "Portfolio Inquiry"
  )}&body=${encodeURIComponent(
    `Hi Darshan,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
  )}`;

  return (
    <Container id="contact">
      <Wrapper>
        <SectionBadge
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Direct Communication
        </SectionBadge>

        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Let's Build Something <span className="gradient-text">Impactful</span>
        </Title>

        <Desc
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Have a project proposal, engineering inquiry, or career opportunity? Send me a message directly.
        </Desc>

        <ContactContent>
          <InfoBox
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <InfoTitle>Contact Information</InfoTitle>
            <InfoText>
              Feel free to reach out directly via email, phone, or connect on LinkedIn and GitHub.
            </InfoText>

            <InfoItems>
              <InfoItem>
                <a className="left-side" href={`mailto:${Bio.email}`}>
                  <div className="icon-wrap">
                    <FaEnvelope size={15} />
                  </div>
                  <span>{Bio.email}</span>
                </a>
                <CopyBtn onClick={handleCopyEmail} title="Copy Email">
                  {copied ? <FaCheck color="#34d399" /> : <FaCopy />}
                </CopyBtn>
              </InfoItem>

              <InfoItem>
                <a className="left-side" href={`tel:${Bio.phone}`}>
                  <div className="icon-wrap">
                    <FaPhoneAlt size={14} />
                  </div>
                  <span>{Bio.phone}</span>
                </a>
              </InfoItem>

              <InfoItem>
                <div className="left-side">
                  <div className="icon-wrap">
                    <FaMapMarkerAlt size={15} />
                  </div>
                  <span>Gujarat, India</span>
                </div>
              </InfoItem>
            </InfoItems>
          </InfoBox>

          <ContactForm
            ref={form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FormTitle>Send a Message 🚀</FormTitle>

            <Input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
            <Input
              type="text"
              name="subject"
              placeholder="Subject (e.g. Job Opportunity / Project Inquiry)"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <TextArea
              name="message"
              rows={4}
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            />

            {status === "success" && (
              <StatusMessage className="success">
                <div className="status-header">
                  <FaCheckCircle /> Message Sent Successfully!
                </div>
                <div>Your message has been delivered directly to {Bio.email}. I will respond shortly!</div>
              </StatusMessage>
            )}

            {status === "activation_needed" && (
              <StatusMessage className="warning">
                <div className="status-header">
                  📬 Action Required: One-Time Email Activation
                </div>
                <div>
                  FormSubmit sent a confirmation email to <strong>{Bio.email}</strong>. Please open Gmail and click <strong>"Activate Form"</strong> once to enable instant submissions.
                </div>
              </StatusMessage>
            )}

            {status === "direct_opened" && (
              <StatusMessage className="info">
                <div className="status-header">
                  <FaCheckCircle /> Opened Gmail with your pre-filled message!
                </div>
                <div>Simply click "Send" in your email compose window to deliver to {Bio.email}.</div>
              </StatusMessage>
            )}

            <ButtonRow>
              <SubmitButton type="submit" disabled={loading}>
                <FaPaperPlane size={13} />
                {loading ? "Sending..." : "Send Message"}
              </SubmitButton>

              <DirectMailLink
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Compose directly in Gmail web"
              >
                <FaExternalLinkAlt size={11} /> Open in Gmail
              </DirectMailLink>

              <DirectMailLink
                href={`mailto:${Bio.email}?subject=${encodeURIComponent(
                  formData.subject || "Portfolio Contact"
                )}&body=${encodeURIComponent(
                  `Hi Darshan,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
                )}`}
                title="Open in default mail client"
              >
                <FaEnvelope size={11} /> Mail App
              </DirectMailLink>
            </ButtonRow>
          </ContactForm>
        </ContactContent>
      </Wrapper>
    </Container>
  );
};

export default Contact;
