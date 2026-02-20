/** ELRR Datasync Build Shell */

package elrrdatasync;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public final class ElrrDatasync {
    /** Logger. */
    private static final Logger LOGGER =
        LoggerFactory.getLogger(ElrrDatasync.class);
    /** Private Instantiation. */
    private ElrrDatasync() {
        throw new UnsupportedOperationException();
    }

    /** ELRR Datasync Logger.
     * @param args Command Line Arguments
     */
    public static void main(final String[] args) {
        LOGGER.info("Hello World");
    }
}
