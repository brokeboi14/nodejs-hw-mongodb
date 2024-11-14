import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  createContactController,
  deleteContactController,
  getContactIdController,
  getContactsController,
  updateContactController,
} from '../controllers/contacts.js';
import { validateBody, } from '../middlewares/validateBody.js';
import { createContactsSchema, updateContactSchema } from '../validation/contacts.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

router.get('/', ctrlWrapper(getContactsController));

router.get('/:contactId', isValidId, ctrlWrapper(getContactIdController));

router.post('/', validateBody(createContactsSchema), ctrlWrapper(createContactController));

router.patch('/:contactId', isValidId, validateBody(updateContactSchema), ctrlWrapper(updateContactController));

router.delete('/:contactId', isValidId, ctrlWrapper(deleteContactController));

export default router;
