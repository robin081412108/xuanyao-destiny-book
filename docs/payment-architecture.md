# Payment Architecture

## MVP Price

The first book unlock is `$3.99`.

## Flow

1. User creates a preview.
2. User opens checkout.
3. Payment provider confirms the order.
4. Server creates a report snapshot.
5. User receives a recoverable result token.

## Rules

- Never unlock from an unverified client event.
- Store provider transaction IDs.
- Keep result access token hashes, not raw tokens.
- Support duplicate-charge review.
