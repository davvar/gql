import { compact } from 'lodash';
import { firestore } from 'src/main';

export class FirestoreDatabase<T extends { id: string }> implements IEntity<T> {
  constructor(protected collection: string) {}

  async get() {
    return this.client.get().then(this.getDocs);
  }

  getById(id: string) {
    return this.client.doc(id).get().then(this.getDoc);
  }

  async create(payload: Partial<T>): Promise<T> {
    const ref = await this.client.add(payload);
    return ref.get().then(this.getDoc);
  }

  async update(id: string, payload: Partial<T>): Promise<any> {
    await this.client.doc(id).set(payload, { merge: true });
    return this.client.doc(id).get().then(this.getDoc);
  }

  async delete(id: string): Promise<boolean> {
    await this.client.doc(id).delete();
    return true;
  }

  get client() {
    return firestore.collection(this.collection);
  }

  private getDocs(docs: FirebaseFirestore.QuerySnapshot): T[] {
    return docs.empty ? [] : compact(docs.docs.map(this.getDoc));
  }

  private getDoc(doc: FirebaseFirestore.DocumentSnapshot): T | null {
    return doc.exists ? { id: doc.id, ...(doc.data() as any) } : null;
  }
}
